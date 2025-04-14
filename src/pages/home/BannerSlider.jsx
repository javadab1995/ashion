import { useEffect, useState } from "react";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    

    return () => clearInterval(intervalId);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full h-[500px] sm:h-[400px]  mb-20 flex flex-col justify-center items-center relative bg-none overflow-hidden sm:bg-[url(./banner-1.jpg)] bg-cover bg-center">
      <div className="overflow-hidden max-w-full md:max-w-xl text-center">
        <div
          className="relative flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 33.27}%)`,
            width: "300%",
          }}
        >
          <div className="w-1/3 flex-shrink-0 p-4">
            <span className="text-indigo-300 text-lg font-light">
              The Collection
            </span>
            <h3 className="mb-4 text-2xl md:text-4xl text-indigo-700 font-semibold">
              The Project Jacket
            </h3>
            <LinkButton to="shop" type="primary">
              shop now
            </LinkButton>
          </div>
          <div className="w-1/3 flex-shrink-0 p-4">
            <span className="text-indigo-300 text-lg font-light">
              The Chloe Collection
            </span>
            <h3 className="mb-4 text-2xl md:text-4xl text-indigo-700 font-semibold">
              The Chloe Collection
            </h3>
            <LinkButton to="shop" type="primary">
              shop now
            </LinkButton>
          </div>
          <div className="w-1/3 flex-shrink-0 p-4">
            <span className="text-indigo-300 text-lg font-light">
              The New Collection
            </span>
            <h3 className="mb-4 text-2xl md:text-4xl text-indigo-700 font-semibold">
              The Project Jacket
            </h3>
            <LinkButton to="shop" type="primary">
              shop now
            </LinkButton>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-10 flex justify-center space-x-4">
          <Button
            goToSlide={goToSlide}
            currentIndex={currentIndex}
            type="dot"
          />
        </div>
      </div>
    </section>
  );
}

export default BannerSlider;
