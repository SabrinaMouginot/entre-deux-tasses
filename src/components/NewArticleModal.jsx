export default function NewArticleModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Nouvel article</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Titre"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="datetime-local"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select className="w-full p-2 border border-gray-300 rounded">
            <option value="image">Image</option>
            <option value="video">Vidéo</option>
          </select>
          <input
            type="url"
            placeholder="Lien de l'image ou vidéo"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Contenu de l'article"
            className="w-full p-2 border border-gray-300 rounded h-32"
          ></textarea>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Publier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
