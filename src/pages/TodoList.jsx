import React, { useEffect, useState } from 'react';
import TodoListComponent from '../components/TodoListComponent';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simuler la récupération des tâches (vous pouvez remplacer cela par un appel API réel)
  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        // Simuler un délai
        //await new Promise((resolve) => setTimeout(resolve, 1000));
        // Exemple de données de tâches
        const data = [
          { id: 1, task: 'Apprendre React' },
          { id: 2, task: 'Construire une application Todo' },
          { id: 3, task: "Tester l'application" },
        ];
        setTodoList(data);
        console.log(todoList);
      } catch (error) {
        setError(`Erreur lors de la récupération des tâches: ${error.message}`);
      } finally {
        // Vous pouvez ajouter un indicateur de chargement ici si nécessaire
        console.log('Récupération des tâches terminée');
        setIsLoading(false);
      }
    };
    fetchTodoList();
  }, []);

  if (isLoading) {
    return <p> chargement ... </p>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <p>This is the Todo List page.</p>

      <TodoListComponent todoList={todoList} />
    </div>
  );
}
