import { useState } from "react";

function Header({ onSearch }) {

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <header
      className="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/bg_header.png')" }}
    >
      <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Entre deux tasses</h1>
      <p className="text-xl mb-6 drop-shadow-md">Un blog à lire entre deux gorgées de café</p>

      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchInput}
          // onChange={(e) => onSearch(e.target.value)}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full max-w-md p-3 rounded-lg text-black shadow"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          🔍
        </button>
      </div>
    </header>
  );
}

export default Header;