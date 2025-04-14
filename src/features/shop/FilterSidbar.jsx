


function FilterSidbar() {
  
 

    return (
      <div className="lg:w-1/4 w-full flex flex-col mt-28  px-4 lg:px-2 ">
        <h2 className="uppercase font-semibold text-xl text-indigo-950 ">
          <span className="border-b-2 border-red-700">categ</span>
          ories
        </h2>
        <ul className="flex flex-col gap-0 text-sm mt-16 divide-y-2 divide-solid justify-center filtercategory w-full">
          {["Women’s", "Men’s", "Kid’s", " Accessories", " Cosmetics"].map(
            (list, i) => (
              <details className="py-4" key={i}>
                <summary className="flex justify-between">{list}</summary>

                <article className="text-indigo-300 mt-2">
                  <ul className="space-y-2 ">
                    <li>_ Coats</li>
                    <li>_ Jackets</li>
                    <li>_ Dresses</li>
                    <li>_ Shirts</li>
                    <li>_ T-shirts</li>
                    <li>_ Jeans</li>
                  </ul>
                </article>
              </details>
            )
          )}
        </ul>

        <div className="mt-20 w-full ">
          <h2 className="uppercase font-semibold text-xl text-indigo-950 ">
            <span className="border-b-2 border-red-700">Shop By </span>
            Price
          </h2>
         
        </div>
      </div>
    );
}

export default FilterSidbar
