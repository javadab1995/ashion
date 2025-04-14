import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";


function Footer() {
  return (
    <section className="flex justify-center items-center h-auto mt-10  ">
      <div className="lg:w-10/12 xl:w-8/12  w-full  h-auto flex gap-4 md:gap-0 flex-row   justify-between flex-wrap px-4 lg:px-0 xl:flex-nowrap">
        <div className="space-y-6 md:w-1/4 lg:w-1/3 w-full ">
          <h2>
            <img src="./logo.png" alt="logo" />
          </h2>
          <p className=" text-slate-500 text-base w-9/12 overflow-hidden  text-ellipsis whitespace-nowrap lg:overflow-none lg:whitespace-break-spaces">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt cilisis.
          </p>
          <ul className="flex flex-wrap  w-8/12 lg:w-full">
            {[0, 1, 2, 3, 4].map((payment, i) => (
              <li key={i}>
                <img src={`./payment-${i + 1}.png`} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 md:w-1/4 lg:w-1/3  w-full">
          <h2 className="font-bold text-indigo-950 text-2xl">Quick links</h2>
          <ul className="space-y-2  text-slate-500">
            <li>aboutus</li>
            <li>blog</li>
            <li>contcat</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="space-y-4 md:w-1/4 lg:w-1/3  w-full">
          <h2 className="font-bold text-indigo-950 text-2xl">Account</h2>
          <ul className="space-y-2 text-slate-500">
            <li>My Account </li>
            <li>Orders</li>
            <li>Tracking</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="space-y-6 md:w-1/4 lg:w-1/3 w-full relative">
          <h2 className="font-bold text-indigo-950 text-2xl">NEWSLETTER</h2>
          <div className="relative">
            <input className="input w-full " placeholder="Email" type="text" />
            <button className="absolute right-1 top-1.5 text-center bg-red-600 text-red-50 rounded-full px-2 py-2 md:px-4 md:py-2">
              SUBSCRIPT
            </button>
          </div>
          <ul className="flex gap-4 flex-wrap ">
            <li className="bg-indigo-200 rounded-full px-2 py-2">
              <TiSocialFacebook size="25px" />
            </li>
            <li className="bg-indigo-200 rounded-full px-2 py-2">
              <TiSocialTwitter size="25px" />
            </li>
            <li className="bg-indigo-200 rounded-full px-2 py-2">
              <SlSocialInstagram size="25px" />
            </li>
            <li className="bg-indigo-200 rounded-full px-2 py-2">
              <TiSocialYoutube size="25px" />
            </li>
            <li className="bg-indigo-200 rounded-full px-2 py-2">
              <TiSocialPinterest size="25px" />
            </li>
          </ul>
        </div>
        <div className="md:hidden block h-[30px] w-full mt-10 bg-slate-50 text-slate-50">
          1
        </div>
      </div>
    </section>
  );
}

export default Footer;
