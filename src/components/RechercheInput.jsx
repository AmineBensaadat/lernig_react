import React from 'react';

export default function rechercheInput({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a film..."
      />
    </div>
  );
}
