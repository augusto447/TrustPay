import logo from "../assets/logo.png";
import imagem from "../assets/grafic.jpg";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dashboard");
  }
  return (
    <div className="text-1xl flex-col  md:flex-row   flex items-center  justify-center gap-16 h-screen w-screen bg-gray-100">
      <form className="flex flex-col justify-center p-8 gap-4     ">
        <div className="flex items-center justify-center gap-2">
          <img className="h-14" src={logo} alt="" />
          <span className="font-bold text-2xl">TrustPay</span>
        </div>
        <h1 className="text-center">Cria a tua conta </h1>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="nome"
          placeholder="Digita o seu nome"
          className="p-2 w-full md:w-80  border border-gray-300 rounded-lg    focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digita o seu Email"
          className=" p-2 w-full md:80  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Digita a sua Password"
          className="p-2 w-full md:80   border border-gray-300 rounded-lg         focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleNavigate}
          type="submit"
          className="p-2 w-80 bg-gray-800 rounded-lg text-white font-bold  hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Entrar
        </button>
        <footer className="flex gap-4 items-center justify-center">
          <span>Ja tens uma conta?</span>
          <a
            className=" text-gay-800 font-bold cursor-pointer hover:text-gray-700 "
            href=""
          >
            Faça Login
          </a>
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
