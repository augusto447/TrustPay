export function Profile() {
  return (
    <div className="flex justify-center items-start mt-6 px-4 sm:px-6 md:px-10">
      <form className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md w-full max-w-md flex flex-col mb-10">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
          Perfil
        </h1>

        <div className="flex flex-col gap-4">
          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nome"
              className="font-bold text-gray-700 text-sm sm:text-base"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Ex: João"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-bold text-gray-700 text-sm sm:text-base"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ex: au9dN@example.com"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
          </div>

          {/* Alterar senha */}
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Alterar Senha
            </h2>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="senha-atual"
                className="font-bold text-gray-700 text-sm sm:text-base"
              >
                Senha Atual
              </label>
              <input
                id="senha-atual"
                type="password"
                placeholder="ex: 123456"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="nova-senha"
                className="font-bold text-gray-700 text-sm sm:text-base"
              >
                Nova Senha
              </label>
              <input
                id="nova-senha"
                type="password"
                placeholder="ex: 123456"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirma-senha"
                className="font-bold text-gray-700 text-sm sm:text-base"
              >
                Confirmação da Nova Senha
              </label>
              <input
                id="confirma-senha"
                type="password"
                placeholder="ex: 123456"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Botão Salvar */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold w-full sm:w-auto"
            >
              Salvar alterações
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
