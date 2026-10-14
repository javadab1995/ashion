
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const orderId = query.trim();

    if (!orderId) {
      toast.error("لطفاً کد سفارش را وارد کنید!");
      return;
    }

    navigate(`/order/${encodeURIComponent(orderId)}`);
    setQuery("");
  }

  return (
    <div dir="rtl" className="w-full">
      <form
        onSubmit={handleSubmit}
        role="search"
        className="relative w-full"
      >
        <input
          type="text"
          name="orderId"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جست‌وجو با کد سفارش..."
          aria-label="کد سفارش"
          autoComplete="off"
          className=" rounded-full border border-input bg-surface-alt py-2 pr-10 pl-4 text-sm text-text-h shadow-sm transition-all duration-300 placeholder:text-text-muted w-24 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:w-52"
        />

        <button
          type="submit"
          aria-label="جست‌وجوی سفارش"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-primary"
        >
          <FiSearch size={18} />
        </button>
      </form>
    </div>
  );
}

export default Search;
