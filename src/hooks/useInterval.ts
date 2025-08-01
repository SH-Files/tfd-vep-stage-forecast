import { useRef, useEffect } from "react";

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const exe = () => {
      // @ts-ignore
      savedCallback.current();
    };
    const id = setInterval(exe, delay);
    return () => clearInterval(id);
  }, []);
};

export default useInterval;
