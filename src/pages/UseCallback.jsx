import React from 'react';

const UseCallback = () => {
    return (
        <div>
            <h2>Qu’est-ce que useCallback ?</h2>
            <p>useCallback est un Hook React qui mémorise une fonction, pour éviter qu’elle soit recréée à chaque render.</p>
            <p>“Garde la même fonction tant que ses dépendances n’ont pas changé.”</p>
        </div>
    );
}

export default UseCallback;
