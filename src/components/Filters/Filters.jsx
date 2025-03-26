import './Filters.css';

export const Filters = ({ filters, handleFilterChange }) => {
  return (
    <div className='filters'>
      <label htmlFor='search-query' className='filter-label'>
        Unveil the mysteries of the Universe.
      </label>
      <input
        className='filter-query'
        type='text'
        name='query'
        value={filters.query}
        onChange={handleFilterChange}
        placeholder='Ignite your curiosity...'
      />
    </div>
  );
};
