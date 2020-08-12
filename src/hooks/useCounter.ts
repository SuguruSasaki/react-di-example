import { useState } from "react";

const useCounter = (): [number, (n: number) => void] => {
  const [count, setCount] = useState(0);
  const add = (n: number) => setCount(count + n);
  return [count, add];
};

export default useCounter;
