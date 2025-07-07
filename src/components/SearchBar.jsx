export default function SearchBar({ searchInput, setSearchInput, onValidate }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onValidate();
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Rechercher un article..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full max-w-md p-3 rounded-lg text-black shadow pr-12"
      />
      <button
        onClick={onValidate}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        🔍
        
      </button>
    </div>
  );
}
