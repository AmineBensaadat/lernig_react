import React, { useState } from "react";
import Modal from "../components/Modal";

const ReactPortal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Qu’est-ce qu’un React Portal ?</h2>

      <p>
        Un React Portal permet de rendre un composant en dehors de l’arbre DOM
        principal de son parent, tout en restant dans l’arbre React.
      </p>

      <h3>Pourquoi utiliser React Portal ?</h3>
      <ul>
        <li>Modals</li>
        <li>Tooltips</li>
        <li>Dropdowns</li>
        <li>Overlays</li>
      </ul>

      <p>
        👉 Ça évite les problèmes de <strong>z-index</strong> et
        <strong> overflow: hidden</strong>.
      </p>

      <hr />

      <h3>Exemple simple</h3>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default ReactPortal;
