import React from 'react';

const UserList = ({ users }) => {
     if (users.length === 0) {
    return <p>Aucun utilisateur trouvé</p>;
  }
    return (
        <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserList;
