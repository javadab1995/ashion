/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */

import Header from "../../ui/Header";
import Modal from "../../ui/Modal";
import { getProduct } from "../../services/apiShop";
import { useLoaderData } from "react-router-dom";

import InstagramLink from "../../pages/home/InistgramLink";
import Footer from "../../ui/Footer";
import FilterSidbar from "./FilterSidbar";
import ShopItem from "./ShopItem";
import { useState } from "react";
import MobileHeader from "../../ui/MobileHeder";

function Shop() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const allProducts = useLoaderData(); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8); 
  const [shop, setShop] = useState(allProducts.slice(0, itemsPerPage));

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setShop(
      allProducts.slice(
        (pageNumber - 1) * itemsPerPage,
        pageNumber * itemsPerPage
      )
    );
  };

 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <main>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      <Header setIsOpenModal={setIsOpenModal} />
      <MobileHeader />
      <div className="flex lg:flex-row flex-col px-2 w-full md:py-16 lg:gap-10  lg:justify-between">
        <FilterSidbar />
        <div className="flex flex-col justify-center items-center  mt-20 w-full">
          <ul className="grid lg:grid-cols-4 lg:grid-row-auto  md:grid-cols-2 gap-10  w-full px-2">
            {currentItems.map((product) => (
              <ShopItem key={product.id} product={product} />
            ))}
          </ul>
          <nav className="mt-10   w-full lg:flex justify-center md:px-2">
            <ul className="flex  justify-between border-r-2 border-l-2  border-indigo-700 px-4  w-full ">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <button
                    onClick={() => paginate(number)}
                    className={`font-bold ${
                      number === currentPage
                        ? "text-red-600 text-xl"
                        : "text-red-950"
                    }`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <InstagramLink />
      <Footer />
    </main>
  );
}

export async function loader() {
  const shop = await getProduct();
  return shop;
}

export default Shop;
