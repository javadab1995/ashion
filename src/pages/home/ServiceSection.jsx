import { BsCarFront, BsCash } from "react-icons/bs";
import { MdOutlineSupport } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

function ServiceSection() {
    return (
      <section className="flex justify-center items-center mt-[400px] md:mt-10 px-4 md:px-0">
        <div className="flex lg:w-10/12 xl:w-8/12 px-4 lg:px-0  w-full justify-between flex-wrap gap-y-6">
          <div className="flex gap-x-4">
            <BsCarFront size="60px" color="oklch(.511 .262 276.966)" />
            <div className="flex flex-col gap-3 ">
              <h4 className="font-bold text-base text-indigo-950">
                Free Shipping
              </h4>
              <span className="font-medium text-base text-slate-500">
                For all oder over $99
              </span>
            </div>
          </div>
          <div className="flex gap-x-4">
            <BsCash size="60px" color="oklch(.511 .262 276.966)" />
            <div className="flex flex-col gap-3 ">
              <h4 className="font-bold text-base text-indigo-950">
                Money Back Guarantee
              </h4>
              <span className="font-medium text-base text-slate-500">
                If good have Problems
              </span>
            </div>
          </div>
          <div className="flex gap-x-4">
            <MdOutlineSupport size="60px" color="oklch(.511 .262 276.966)" />
            <div className="flex flex-col gap-3 ">
              <h4 className="font-bold text-base text-indigo-950">
                Online Support 24/7
              </h4>
              <span className="font-medium text-base text-slate-500">
                Dedicated support
              </span>
            </div>
          </div>
          <div className="flex gap-x-4">
            <RiSecurePaymentFill size="60px" color="oklch(.511 .262 276.966)" />
            <div className="flex flex-col gap-3 ">
              <h4 className="font-bold text-base text-indigo-950">
                Payment Secure
              </h4>
              <span className="font-medium text-base text-slate-500">
                100% secure payment
              </span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ServiceSection
