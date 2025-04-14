import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    return (
      <main className="w-full flex justify-center items-center h-screen">
        <div className="flex flex-col items-center w-8/12  gap-20">
          <img className="w-[200px]" src="./error.png" alt="error" />
          <h1 className="text-6xl font-link font-semibold">
            Oh, no! It seems we`ve lost this page
          </h1>
          <button
            className="text-indigo-600 font-bold text-xl flex justify-self-center mt-20 px-4 py-2 border-2 rounded-xl border-indigo-700 hover:bg-indigo-600 hover:text-indigo-50"
            onClick={() => navigate(-1)}
          >
            &larr; Go back
          </button>
        </div>
      </main>
    );
}

export default Error
