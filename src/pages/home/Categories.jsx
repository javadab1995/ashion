
import LinkButton from "../../ui/LinkButton";

function Categories() {
    return (
      <section className="mt-5">
        <div className="flex flex-col lg:flex-row gap-3  h-auto">
          <div className="w-full lg:w-1/2 h-[638px]">
            <div className="bg-[url(./category-1.jpg)] w-full h-full flex flex-col items-start justify-center px-16 gap-5 lg:bg-center ">
              <h2 className="text-5xl font-bold font-shop">Women’s fashion</h2>
              <p className="max-w-md text-medium text-slate-400">
                Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                incidid-unt labore edolore magna aliquapendisse ultrices
                gravida.
              </p>
              <LinkButton type="primary" to="shop">
                shop now
              </LinkButton>
            </div>
          </div>
          <div className="space-y-2 w-full lg:w-1/2 h-full lg:h-1/2">
            <div className="flex md:flex-row flex-col gap-3 h-full  ">
              <div className="bg-[url(./category-2.jpg)]  h-[314px] w-full flex flex-col items-start justify-center px-6 lg:bg-center bg-no-repeat">
                <h2 className="text-2xl font-bold">Men’s fashion</h2>
                <p className="max-w-md text-sm text-slate-400"></p>
                <LinkButton type="primary" to="shop">
                  shop now
                </LinkButton>
              </div>
              <div className="bg-[url(./category-3.jpg)] h-[314px] w-full flex flex-col items-start justify-center px-6 lg:bg-center bg-no-repeat">
                <h2 className="text-2xl font-bold">Kid’s fashion</h2>
                <p className="max-w-md text-medium text-slate-400"></p>
                <LinkButton type="primary" to="shop">
                  shop now
                </LinkButton>
              </div>
            </div>
            <div className="flex gap-3 md:flex-row flex-col  h-full">
              <div className="bg-[url(./category-4.jpg)] h-[314px] w-full flex flex-col items-start justify-center px-6 lg:bg-center bg-no-repeat">
                <h2 className="text-2xl font-bold">Cosmetics</h2>
                <p className="max-w-md text-sm text-slate-400"></p>
                <LinkButton type="primary" to="shop">
                  shop now
                </LinkButton>
              </div>
              <div className="bg-[url(./category-5.jpg)] h-[314px] w-full flex flex-col items-start justify-center px-6 lg:bg-center bg-no-repeat">
                <h2 className="text-2xl font-bold ">Accessories</h2>
                <p className="max-w-md text-sm text-slate-400 "></p>
                <LinkButton type="primary" to="shop">
                  shop now
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Categories
