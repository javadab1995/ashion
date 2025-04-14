
import Countdown from "react-countdown";

function CountdownComponnent() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-red-500 font-bold">Times up!</span> 
      );
    } else {
      return (
        <span className="text-slate-400 font-bold text-3xl font-present space-x-2">
          <span className="text-slate-950">{days}</span> days,
          <span className="text-slate-950">{hours}</span> hours,
          <span className="text-slate-950">{minutes}</span> minutes,
          <span className="text-orange-700">{seconds}</span> seconds
        </span>
      );
    }
  };

  return (
    
      
      <Countdown
        date={Date.now() + 27 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000}
        renderer={renderer}
      />
    
  );
}

export default CountdownComponnent;
