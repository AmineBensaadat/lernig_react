import React from 'react';

const UseEffect = () => {
    return (
        <div>
            <h2>Qu’est-ce que useEffect ?</h2>
            <p>useEffect est un hook React qui permet d’exécuter du code “effet de bord” après le render d’un composant.</p>
            <p>Un effet de bord, c’est tout ce qui ne fait pas partie du rendu :</p>
            <ul>
                <li>Appels API</li>
                <li>Abonnements à des événements</li>
                <li>Manipulation du DOM</li>
                <li>Timers (setTimeout, setInterval)</li>
            </ul>
            <p>useEffect prend deux arguments :</p>
            <ol>
                <li>Une fonction qui contient le code à exécuter.</li>
                <li>Un tableau de dépendances qui détermine quand l’effet doit être réexécuté.</li>
            </ol>
        </div>
    );
}

export default UseEffect;
