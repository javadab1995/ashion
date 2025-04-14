import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

function NewProducts({ shop }) {
  const categories = [
    "Furniture",
    "Electronics",
    "Miscellaneous",
    "Clothes",
    "Shoes",
  ];
  const activeButtonStyle = {
    color: "blue",
   
  };
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? shop.filter((product) => product.price < 200 && product.price > 40)
      : shop
          .filter((product) => product.category.name=== selectedCategory)
          .filter((product) => product.price < 200 && product.price > 38);

  return (
    <div className="w-full flex justify-center items-center lg:px-0 px-4 mt-20 mb-10">
      <div className="lg:w-10/12 xl:w-8/12  w-full">
        <div className="flex justify-between w-full flex-warp md:flex-row flex-col">
          <h2 className="md:text-3xl text-base font-medium mb-4 md:mb-0">
            <span className=" border-b-2 border-b-red-600">New</span> product
          </h2>
          <ul className="flex gap-8   flex-wrap md:text-base text-sm ">
            {["All", ...categories].map((list, i) => (
              <li
                style={selectedCategory === list ? activeButtonStyle : null}
                className="hover:text-indigo-500  hover:cursor-pointer img md:p-2 "
                key={i}
                onClick={() => setSelectedCategory(list)}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="grid md:grid-cols-4 md:grid-rows-1 gap-10 grid-cols-1 grid-rows-4 ">
            {filteredProducts.slice(0, 4).map((product) => (
              <li
                className="mt-10 space-y-5 text-center h-[350px]"
                key={product.id}
              >
                <img
                  className="md:w-[480px] h-[220px] w-[500px]"
                  src={product.images[0]}
                  alt={product.title}
                />
                <h2 className="text-indigo-950 font-semibold text-base">
                  {product.title}
                </h2>
                <p className="font-light text-sm text-indigo-500">
                  {product.category.name}
                </p>
                <span className="text-red-700 font-bold">
                  {formatCurrency(product.price)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
