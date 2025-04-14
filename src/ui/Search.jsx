import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("لطفاً کد سفارش را وارد کنید!");
      return;
    }
    navigate(`/order/${query}`);
    setQuery(""); 
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-full px-4 py-2 text-sm placeholder:text-indigo-700 w-24 sm:w-64 transition-all duration-300 md:focus:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-indigo-50 shadow-md pr-10"
          placeholder="Search by Order ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-600"
        >
          <FiSearch size={18} />
        </button>
      </form>
    </div>
  );
}

export default Search;
