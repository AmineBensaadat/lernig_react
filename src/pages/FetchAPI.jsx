import React, { useEffect, useState } from 'react';
import UserlistsApi from '../components/UserlistsApi';

export default function FetchAPI() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Faire un appel API pour récupérer les utilisateurs
  useEffect(() => {
    const fetcheUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetcheUsers();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }
  return (
    <div>
      <div>Page FetchAPI</div>
      <UserlistsApi users={users} />
    </div>
  );
}
