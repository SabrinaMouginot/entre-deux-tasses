function Header() {
  return (
    <header
      className="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/bg_header.png')" }}
    >
      <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Entre deux tasses</h1>
      <p className="text-xl mb-6 drop-shadow-md">Un blog à lire entre deux gorgées de café</p>
      <input
        type="text"
        placeholder="Rechercher un article..."
        className="w-full max-w-md p-3 rounded-lg text-black shadow"
      />
    </header>
  );
}

export default Header;