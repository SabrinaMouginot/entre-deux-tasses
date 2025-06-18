export default function Comment() {

  return (
    <div className="mt-6">

      {/* Formulaire de commentaire */}
      <form className="space-y-2">
        <textarea
          placeholder="Votre commentaire..."
          className="w-full p-2 border border-gray-300 rounded h-20"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
