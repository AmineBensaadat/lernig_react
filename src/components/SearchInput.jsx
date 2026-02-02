import React from 'react';

const SearchInput = ({value, onChange}) => {
    return (
       <input type="text" placeholder="merci de faire une recherche" value={value} onChange={onChange} />
    );
}

export default SearchInput;
