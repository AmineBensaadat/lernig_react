function Child({ onSendData }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => onSendData("Hello from Child 👋")}>
        Send data to Parent
      </button>
    </div>
  );
}

export default Child;
