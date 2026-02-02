import React from 'react';

const SSR = () => {
    return (
         <div>
              <h2>Qu’est-ce que le SSR ?</h2>
        
              <p>
                SSR = Server-Side Rendering (rendu côté serveur).
              </p>
              <ul>
                <li>Normalement, React rend les composants dans le navigateur (CSR = Client-Side Rendering).</li>
                <li>Avec SSR, le serveur génère le HTML complet avant de l’envoyer au navigateur.</li>
              </ul>
        
              <p>
                <strong>Avantages du SSR :</strong>
              </p>
              <p>1 . Chargement plus rapide → l’utilisateur voit le contenu immédiatement.</p>
              <p>2 . SEO amélioré → les moteurs de recherche voient le contenu HTML directement.</p>
              <p>3 . Utile pour les pages qui ont besoin de données côté serveur avant l’affichage.</p>
        
              <hr />
        
              <div>
                <h2>Exemple de Code Splitting</h2>
                <p>
                  Le composant lourd ne sera chargé que lorsqu’on affichera cette page.
                </p>
        
              
              </div>
            </div>
    );
}

export default SSR;
