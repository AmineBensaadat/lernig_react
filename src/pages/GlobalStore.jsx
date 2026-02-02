import { useGlobal } from "../GlobalContext";

const GlobalStore = () => {
  const { user, setUser, theme, setTheme } = useGlobal();



  return (
    <div>
        Pour ajouter un store global dans une application React, ça veut dire qu’on veut un endroit central où toutes les données partagées entre composants peuvent être stockées et modifiées facilement. Voici les options les plus utilisées :
      <h2> Contexte React (React Context)</h2>

      <p>
        <strong>Quoi ? Une API native de React pour partager des données entre composants sans passer par les props.</strong> 
      </p>
      <p>
        <strong>Pour qui ? Pour des données simples comme le thème, la langue, ou l’état d’un utilisateur connecté.</strong>
      </p>

      <div>
      <h1>Global Store Demo</h1>
      <p>Utilisateur actuel : {user ? user : "aucun"}</p>
      <button onClick={() => setUser("Amine")}>Définir utilisateur</button>
      <p>Thème actuel : {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Changer thème
      </button>
    </div>
    </div>
  );
};

export default GlobalStore;
