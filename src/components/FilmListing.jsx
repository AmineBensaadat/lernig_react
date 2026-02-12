import React from 'react';

export default function FilmListing({ films, isLoading }) {
  console.log('FilmListing rendered with films:', films, 'and isLoading:', isLoading);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {films.map((film) => (
        <li key={film.imdbID}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div>
              <img src={film.Poster} alt={`${film.Title} poster`} style={{ width: '100px' }} />
            </div>
            <div>
              <p>
                {film.Title} ({film.Year})
              </p>
              <p>Type : {film.Type} </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
