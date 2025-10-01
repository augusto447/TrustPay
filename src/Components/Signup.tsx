import logo from "../assets/logo.png";
import imagem from "../assets/grafic.jpg";
import { NavLink } from "react-router-dom";
import google from "../assets/google.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DashboardContext } from "../Contexts/DashboardContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const signupSchema = z.object({
  name: z
    .string()
    .min(3, "o nome deve ter no minimo 3 caracteres")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome deve conter apenas letras"),
  email: z.string().email("Digita um email valido"),
  password: z.string().min(6, "A senha deve ter no minimo 6 caracteres"),
});

type SignupFormData = z.infer<typeof signupSchema>;

const provider = new GoogleAuthProvider();

// Força a escolha da conta apenas no signup
provider.setCustomParameters({
  prompt: "select_account",
});

export function Signup() {
  const [message, setMessage] = useState("");
  const { signup } = useContext(DashboardContext);
  const navigate = useNavigate();
  const { setUser } = useContext(DashboardContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  function handleSignup(data: SignupFormData) {
    const success = signup(data.name, data.email, data.password);

    if (success) {
      setMessage("Conta criada com sucesso!");
      navigate("/dashboard");
    } else {
      setMessage("Email ja cadastrado!");
    }

    console.log("Valores do form:", watch());
  }

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName || "Usuário Google",
        email: user.email || "",
        avatar: user.photoURL || "/default-avatar.png",
        password: "", // não vem do Google
      };

      // salva no contexto
      setUser(userData);

      // persiste no localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      console.log("Login bem-sucedido:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login Google:", error);
      setMessage("Erro no login com Google!");
    }
  }

  return (
    <div className="text-1xl flex-col  md:flex-row   flex items-center  justify-center gap-16 h-screen w-full bg-gray-100">
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="flex flex-col justify-center p-8 gap-0.5    "
      >
        <div className="flex items-center justify-center gap-2">
          <img className="h-14" src={logo} alt="" />
          <span className="font-bold text-2xl">TrustPay</span>
        </div>
        <h1 className="text-center">Sign up </h1>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Augusto Manuel"
          {...register("name")}
          className="p-2 w-full md:w-80  border border-gray-300 rounded-lg    focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="augusto11swat@gmail"
          {...register("email")}
          className=" p-2 w-full md:80  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="1234@"
          {...register("password")}
          className="p-2 w-full md:80   border border-gray-300 rounded-lg         focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="p-2 w-80 bg-gray-800 rounded-lg text-white font-bold  hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Sign Up
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
          className=" font-bold flex items-center gap-2 cursor-pointer justify-center border p-2 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors text-white"
        >
          <img className="w-6 h-6" src={google} alt="" />
          <span>Sign up with Google</span>
        </button>
        <footer className="flex gap-4 items-center justify-center">
          <span>Ja tens uma conta?</span>
          <NavLink
            to={"/login"}
            className=" text-gray-800 font-bold cursor-pointer hover:text-gray-700 "
          >
            Faça Login
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
