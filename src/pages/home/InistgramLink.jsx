import { useState } from "react";
import OveralyBg from "../../ui/OveralyBg";

function InstagramLink() {
  const [imageStates, setImageStates] = useState(Array(6).fill(false));

  const handleShowOverlay = (index) => {
    setImageStates(() => {
      const newImageStates = Array(6).fill(false); 
      newImageStates[index] = true; 
      return newImageStates;
    });
    };
    
    
  const handleHideOverlay = () => {
    setImageStates(Array(6).fill(false)); 
  };

  return (
    <section className="w-full h-auto mt-20">
      <div className="grid md:grid-cols-6 md:grid-rows-1 sm:grid-col-3 sm:grid-rows-2 grid-cols-1 grid-rows-6 w-full h-full  ">
        {[0, 1, 2, 3, 4, 5].map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => handleShowOverlay(i)}
            onMouseLeave={handleHideOverlay}
            className="relative h-[320px] w-full  bg-no-repeat grow flex bg-center"
           
          >
            <img src={`./insta-${i + 1}.jpg`} alt="instagram" className="w-full" />
            {imageStates[i] && <OveralyBg />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstagramLink;
