function TypeSelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
}

export default TypeSelect;
