function Button({ children, type, goToSlide, currentIndex, onClick }) {
    const className = "w-3 h-3 rounded-full border-none cursor-pointer ";
    const blue = " oklch(.511 .262 276.966)";
  const lightgray = " oklch(.93 .034 272.788)";
  
    if (type === "dot")
      return (
        <>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={className}
              style={{
                backgroundColor: currentIndex === index ? blue : lightgray,
              }}
            ></button>
          ))}
        </>
    );
  
  if (type === "formbtn") return (
    <button
      className="rounded-br-[50%] rounded-bl-[50%] px-10 py-3 bg-slate-50 text-2xl font-bold text-indigo-950 hover:text-indigo-300 " 
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (type === "back")
    return (
      <button
        onClick={onClick}
        className="text-indigo-950 text-center img flex justify-self-center p-4 font-bold w-3/12 gap-2 "
      >
        {children}
      </button>
    );
  
  if (type === "small") return (
    <button
      className=" w-full bg-lime-700  text-base font-bold text-green-50 hover:bg-lime-600 py-2 flex justify-center "
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  if (type === "submit") return (
    <button
      className="px-8 py-2 rounded-xl text-indigo-950 my-auto text-lg font-semibold  border-2 border-indigo-700  hover:bg-indigo-700 hover:text-indigo-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  
  if (type === "primary") return (
    <button
      className="px-8 py-2 rounded-xl bg-indigo-50 my-auto text-lg text-indigo-950 font-semibold  border-2 border-indigo-700  hover:bg-indigo-500 hover:border-indigo-500 hover:text-indigo-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  

    return (
        <button>
           {children} 
        </button>
    )
}

export default Button
