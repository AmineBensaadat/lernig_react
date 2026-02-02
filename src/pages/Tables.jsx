import React, { useEffect, useMemo, useState } from "react";
import UserList from "../components/UserList";
import SearchInput from "../components/SearchInput";

// Exemple de données pour la table
const USERS = [
  { id: 1, name: "Amine", email: "amine@mail.com" },
  { id: 2, name: "Sara", email: "sara@mail.com" },
  { id: 3, name: "Youssef", email: "youssef@mail.com" },
  { id: 4, name: "Khadija", email: "khadija@mail.com" },
];
const Tables = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Simuler un appel API pour récupérer les données
  useEffect(() => {
    setTimeout(() => {
      setUsers(USERS);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filtrage optimisé avec useMemo
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Table des utilisateurs</h2>
      <div className="search-container " style={{ marginBottom: "15px" }}>
        <div>Rechercher :</div>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}  />
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Tables;
