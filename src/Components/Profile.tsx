export function Profile() {
  return (
    <div className="flex justify-center items-start mt-10">
      <form className="bg-white p-6 rounded-lg shadow-md w-250 flex flex-col mb-10 ">
        <h1 className="text-2xl font-bold text-center text-gray-800">Perfil</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="font-bold text-gray-700">
            Nome
          </label>
          <input
            id="text"
            type="text"
            placeholder="Ex: João"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="number"
              placeholder="Ex:au9dN@example.com"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
            <div className="flex flex-col gap-2 ">
                <h2 className="text-2xl font-bold  text-gray-800">Alterar Senha</h2>
                <div className="">
                    <label className="font-bold text-gray-700 mb" htmlFor="password">Senha actual</label>
                    <input id="password" type="password" placeholder="ex:123456" className="border p-2 rounded w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                </div>
                 <div>
                    <label className="font-bold text-gray-700" htmlFor="password">Nova Senha</label>
                    <input id="password" type="password" placeholder="ex:123456" className="border p-2 rounded w-full mt-3  focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                </div>
                 <div>
                    <label className="font-bold text-gray-700" htmlFor="password">Confirmação da Nova Senha</label>
                    <input id="password" type="password" placeholder="ex:123456" className="border p-2 rounded w-full mt-3  focus:outline-none focus:ring-2 focus:ring-blue-400 "/>
                </div>
            </div>
         
          <div className="flex justify-between  mt-4 w-100">
            <button
              type="submit"
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold"
            >
              Salvar alterações
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
