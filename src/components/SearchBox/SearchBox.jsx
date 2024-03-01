import { useId } from 'react';

function SearchBox({ value, onChange }) {
  const searchId = useId();

  const handleChange = event => {
    const searchTerm = event.target.value;
    onChange(searchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={handleChange}
      id={searchId}
    />
  );
}

export default SearchBox;
