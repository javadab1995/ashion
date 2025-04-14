import LinkButton from "../../ui/LinkButton";


function EmptyFavourite() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-[600px] text-6xl font-shop gap-8 ">
      <p className="uppercase text-xl font-bold text-pink-800 ">
        press 👇🏻 back to shop{" "}
      </p>
      <div className="">
        <LinkButton type="submit" to="/shop">Shop Now</LinkButton>
      </div>
      <h2 className="text-indigo-800 mt-10 border-8 p-4 uppercase font-semibold w-8/12">
        You haven’t added any items to favorites.
      </h2>
    </div>
  );
}

export default EmptyFavourite;
