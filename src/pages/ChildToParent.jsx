import React, { useState } from "react";
import Child from "../components/Child";

function ChildToParent() {
  const [message, setMessage] = useState("");

  // 🔹 callback function
  const handleMessageFromChild = (dataFromChild) => {
    setMessage(dataFromChild);
  };

  return (
    <div>
      <h2>Child → Parent Communication</h2>
      <p>
        On utilise <span style={{ fontWeight: "bold" , backgroundColor: "#fcf809ff" }}>une fonction callback</span> passée en props du parent vers
        l’enfant.
      </p>

      <p>
        <strong>Message from child:</strong> {message}
      </p>

      <Child onSendData={handleMessageFromChild} />
    </div>
  );
}

export default ChildToParent;
