
import CountdownComponnent from "../../ui/CountdownComponnent";


function DiscountBanner() {
  return (
    <section className="flex  justify-center items-center h-[390px] md:mb-36 mb-72 relative">
      <div className="lg:w-10/12 xl:w-8/12  w-full gap-0 flex h-full md:flex-row flex-col">
        <div className="h-full md:w-1/2 w-full">
          <img
            className="h-[390px] w-full"
            src="./discount.jpg"
            alt="discount banner"
          />
        </div>
        <div
          className="bg-slate-200 h-full z-20 md:w-1/2 w-full py-16  text-center
                      after:absolute after:bg-slate-50 md:after:left-[60%] after:left-[33%]
                     md:after:top-[38px] after:top-[420px] after:h-[183px] after:w-[183px] after:content-[ ] after:rounded-full after:z-[-1]"
        >
          <span className="text-sm">Discount</span>
          <h2 className="font-present md:text-[55px] text-5xl text-orange-700  ">
            Summer 2025
          </h2>
          <h5 className="text-orange-600 font-extrabold  text-3xl">
            <span className="text-indigo-950 font-bold font-shop">Sale</span>{" "}
            50%
          </h5>
          <div className="mt-20">
            <CountdownComponnent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountBanner;
