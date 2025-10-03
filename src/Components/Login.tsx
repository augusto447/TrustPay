import logo from "../assets/logo.png";
import imagem from "../assets/grafic.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import { z } from "zod";
import { DashboardContext } from "@/Contexts/DashboardContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

const loginSchema = z.object({
  email: z.string().email("digita um email válido"),
  password: z.string().min(6, "A senha deve ter no minimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function Login() {
  const { login } = useContext(DashboardContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { setUser } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function handleLogin(data: LoginFormData) {
    const sucess = login(data.email, data.password);
    if (sucess) {
      navigate("/dashboard");
    } else {
      setMessage("Email ou senha incorretos!");
    }
  }

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName || "Usuário Google",
        email: user.email || "",
        avatar: user.photoURL || "/default-avatar.png",
        password: "", // não precisa, só para tipagem
      };

      // atualiza contexto
      setUser(userData);
      console.log("Firebase user:", user);
      // persiste no localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("Login bem-sucedido:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login Google:", error);
    }
  }

  return (
    <div className="text-1xl flex-col  md:flex-row   flex items-center  justify-center gap-16 h-screen w-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col justify-center p-8 gap-2     "
      >
        <div className="flex items-center justify-center gap-2">
          <img className="h-14" src={logo} alt="" />
          <span className="font-bold text-2xl">TrustPay</span>
        </div>
        <h1 className="text-center">Login na tua conta </h1>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digita o seu Email"
          {...register("email")}
          className=" p-2 w-full md:80  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Digita a sua Password"
          autoComplete="new-password"
          {...register("password")}
          className="p-2 w-full md:80   border border-gray-300 rounded-lg         focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <button
          type="submit"
          className="p-2 w-80 bg-gray-800 rounded-lg text-white font-bold  hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Login
        </button>
        {message && (
          <div
            className={`p-2 rounded mb-4 ${message === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {message}
          </div>
        )}

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">ou</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="    font-bold flex items-center gap-2 cursor-pointer justify-center border p-2 rounded-2xl  hover:bg-gray-700  bg-gray-800 text-white"
        >
          <img className="w-6 h-6" src={google} alt="" />
          <span>Login com Google</span>
        </button>

        <footer className="flex gap-4 items-center justify-center">
          <span>Não tens uma conta?</span>
          <NavLink
            to={"/"}
            className=" text-gay-800 font-bold cursor-pointer hover:text-gray-700 "
          >
            sign up
          </NavLink>
        </footer>
      </form>
      <img
        className=" hidden lg:block lg:w-1/2  h-screen object-cover rounded-lg shadow-md "
        src={imagem}
        alt=""
      />
    </div>
  );
}
