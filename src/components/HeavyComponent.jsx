import React from "react";

function HeavyComponent() {
  return (
    <div style={{ padding: 20, background: "#f0f0f0", marginTop: 20 }}>
      <h3>Je suis un composant lourd chargé à la demande !</h3>
      <p>Je ne suis chargé que quand c’est nécessaire.</p>
    </div>
  );
}

export default HeavyComponent;
