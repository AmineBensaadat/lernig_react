import React, { Suspense } from "react";

// Lazy load d’un composant lourd
const HeavyComponent = React.lazy(() => import("../components/HeavyComponent"));

const CodeSplitting = () => {
  return (
    <div>
      <h2>Code Splitting dans React</h2>

      <p>
        Le Code Splitting consiste à diviser le code de l’application en
        plusieurs “chunks” plus petits qui se chargent uniquement quand ils sont
        nécessaires, au lieu de tout charger d’un coup.
      </p>

      <h3>Pourquoi l’utiliser ?</h3>
      <ul>
        <li>✅ Réduit la taille du bundle → chargement plus rapide</li>
        <li>
          ✅ Améliore le temps jusqu’à l’interaction (Time-to-Interactive)
        </li>
        <li>✅ Permet le lazy loading pour les composants lourds</li>
        <li>✅ Meilleure expérience utilisateur</li>
      </ul>

      <p>
        <strong>Comment l’implémenter ?</strong>
      </p>
      <p>
        React fournit React.lazy et Suspense pour faire du lazy loading au
        niveau des composants.
      </p>

      <hr />

      <div>
        <h2>Exemple de Code Splitting</h2>
        <p>
          Le composant lourd ne sera chargé que lorsqu’on affichera cette page.
        </p>

        <Suspense fallback={<div>Chargement du composant...</div>}>
          <HeavyComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default CodeSplitting;
