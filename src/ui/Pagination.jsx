import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2"

import { useSearchParams } from "react-router-dom";

function Pagination({ products }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const pageCount = Math.ceil(products.length / 10)

    function nextPage() {
        const next = currentPage === pageCount ? currentPage : currentPage + 1

        searchParams.set("page", next)
        setSearchParams(searchParams)
    }
    function prevPage() {
        const prev = currentPage === 1 ? currentPage : currentPage - 1;
        searchParams.set("page", prev)
        setSearchParams(searchParams)
    }
    if (pageCount <= 1) return null;
    return (
      <div className="mt-10 text-lg font-light text-indigo-950 p-4  border border-indigo-700 rounded-md">
        <p className=" px-8">
                 <span className="text-red-700 font-bold p-2">{currentPage === pageCount ? products.length : (currentPage  ) * (11)  }</span> as
                <span className="text-red-800 font-bold p-2">{currentPage * 1 }</span> of
                <span className="p-2 text-indigo-700 font-bold ">{products.length }</span> results
        </p>
        <div className="flex w-full justify-between mt-[-22px] ">
          <button onClick={prevPage}>
            <HiChevronDoubleLeft />
          </button>
          <button onClick={nextPage}>
            <HiChevronDoubleRight />
          </button>
        </div>
      </div>
    );
}

export default Pagination
