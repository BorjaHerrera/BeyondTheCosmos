import { useState } from 'react';

export const useFilters = () => {
  const [filters, setFilters] = useState({
    query: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return { filters, handleFilterChange };
};
