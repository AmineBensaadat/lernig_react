import React, { useEffect, useState } from 'react';

export default function ConteurComponent() {
  const [count, setCount] = useState(0);

const increment = () => {
    setCount(prevCount => prevCount + 1);
  } ;
  return (
    <div>
      <h2>Conteur Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
