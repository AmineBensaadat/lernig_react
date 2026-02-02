import { createPortal } from "react-dom";

function Modal({ onClose }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
        <h3>React Portal Modal</h3>
        <p>This modal is rendered outside the parent DOM tree.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
