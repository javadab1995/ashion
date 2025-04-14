import { useState } from "react";
import { useEffect } from "react";
import { formatCurrency } from "../utils/helpers.js"
import Button from "../ui/Button.jsx"
function RangeFilter() {
  const [minVal, setMinVal] = useState(33);
  const [maxVal, setMaxVal] = useState(99);

  const min = 33;
  const max = 99;

  useEffect(() => {
    if (minVal > maxVal) {
      setMinVal(maxVal);
    }
  }, [minVal, maxVal]);

  useEffect(() => {
    if (maxVal < minVal) {
      setMaxVal(minVal);
    }
  }, [minVal, maxVal]);
  

  const handleMinChange = (e) => {
   
    setMinVal(Math.max(min, Math.min(maxVal, Number(e.target.value))));
  };


  return (
    <div className="mt-10 space-y-4">
      <div className="w-full flex gap-2">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
        />
      </div>
      <div className="flex lg:flex-col flex-row gap-3 w-full lg:items-start justify-between items-center ">
        <span className="font-bold flex">
          {formatCurrency(minVal)} - {formatCurrency(maxVal)}
        </span>

       
          <Button type="submit">Filter</Button>
       
      </div>
    </div>
  );
};

export default RangeFilter