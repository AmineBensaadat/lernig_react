import React, { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ marginBottom: "10px" }}>Syntaxe</h3>

      <div
        style={{
          background: "#0f172a",
          color: "#e5e7eb",
          borderRadius: "8px",
          padding: "16px",
          position: "relative",
          fontFamily: "monospace",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            fontSize: "13px",
            opacity: 0.8,
          }}
        >
          <span>js</span>
          <button
            onClick={handleCopy}
            style={{
              background: "transparent",
              border: "none",
              color: "#93c5fd",
              cursor: "pointer",
            }}
          >
            {copied ? "Copié !" : "Copier le code"}
          </button>
        </div>

        {/* Code */}
        <pre style={{ margin: 0 }}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
