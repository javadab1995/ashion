import { IoLogoInstagram } from "react-icons/io5";

function OveralyBg() {
    return (
      <div className="absolute flex items-center justify-center w-full  h-[320px] bg-indigo-200/70">
        <a className="flex gap-1" href="https://www.instagram.com/yarashkin?igsh=cmw4aGoyd29tNzd2">
          <IoLogoInstagram size="50px" color="#ca1515" />
          <h1 className="font-shop text-4xl font-extrabold text-indigo-800">Yarashkin</h1>
        </a>
      </div>
    );
}

export default OveralyBg
