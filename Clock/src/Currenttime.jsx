//with arrow

import { useEffect } from "react";
import { useState } from "react";

let Currenttime = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="lead text-center">
      this is the current time: {time.toLocaleDateString()}
      {" - "}
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Currenttime;
