import React from "react";
import CodeBlock from "../components/CodeBlock";

const codeExample = `const valeur = React.useMemo(() => {
  return calculCouteux();
}, [dependencies]);`;

const UseMemo = () => {
  return (
    <div>
      <h2>Qu’est-ce que useMemo ?</h2>
      <p>
        useMemo est un Hook React qui permet de mémoriser le résultat d’un calcul
        afin d’éviter de le recalculer à chaque rendu (render).
      </p>

      <CodeBlock code={codeExample} />
    </div>
  );
};

export default UseMemo;
