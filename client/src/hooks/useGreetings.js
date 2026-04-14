import { useState, useEffect } from "react";
import { getGreetings } from "../utils/getGreetings";

const useGreetings = () => {
  const [data, setData] = useState(getGreetings());

  useEffect(() => {
    const update = () => setData(getGreetings());

    const interval = setInterval(update, 60000);

    const onFocus = () => update();

    window.addEventListener("focus", onFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return data;
};

export default useGreetings;
