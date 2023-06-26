import React from 'react';

const Filter = ({ filter, onChangeFilter }) => (
  <label>
    Filter contacts by name:
    <input
      type="text"
      value={filter}
      onChange={event => onChangeFilter(event.target.value)}
    />
  </label>
);

export default Filter;
