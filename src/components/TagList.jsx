export default function TagList({ tags, removeTag }) {
  return (
    <div className="bg-white w-full flex flex-wrap gap-2 px-4 py-3 border-b border-gray-200 min-h-[48px]">
      {tags.map((tag) => (
        <div key={tag} className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm">
          <span>{tag}</span>
          <button
            onClick={() => removeTag(tag)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
}
