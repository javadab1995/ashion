import Logo from "../../ui/Logo";

function EmptyCart() {
    return (
      <div className="flex flex-col justify-center items-center text-center h-[600px] text-9xl font-present ">
        <p className="uppercase text-xl font-bold text-pink-700 ">
          press 👇🏻 back to Home{" "}
        </p>
        <div className="img p-8 mt-8">
          <Logo />
        </div>
        <h2 className="text-indigo-800">OH, cart is Empty! </h2>
      </div>
    );
}

export default EmptyCart
