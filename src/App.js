import { useState } from "react";

export default function App() {
  console.log("render app");
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);

  function handleClick() {
    setCount(count + 1);
    setShowCount(!showCount);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={handleClick} className="mb-20">
        Submit {showCount && <span>{count}</span>}
      </button>
    </div>
  );
}
