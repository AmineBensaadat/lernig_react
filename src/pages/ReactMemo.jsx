import React from 'react';
import CodeBlock from '../components/CodeBlock';
import MemoTable from '../components/MemoTable';

const ReactMemo = () => {
    const codeExample = `function Portefeuille({ data }) {
  console.log("render Portefeuille");
  return <div>{data.total}</div>;
}

export default React.memo(Portefeuille);`;
    return (
        <div>
            <h2>Qu’est-ce que React.memo ?</h2>
            <p>React.memo est un HOC (Higher Order Component) qui permet de mémoriser un composant.</p>
            <p>Il empêche le composant de se re-render si ses props n’ont pas changé.</p>
            <CodeBlock code={codeExample} />
            <h2>Comparaison rapide</h2>
            <p>

            <MemoTable />
            </p>

        </div>
    );
}

export default ReactMemo;
