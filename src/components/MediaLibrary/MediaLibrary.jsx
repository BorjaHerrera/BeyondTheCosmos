import './MediaLibrary.css';
import { Link } from 'react-router-dom';

export const MediaLibrary = ({ results }) => {
  return (
    <div className='media-library'>
      {results.length > 0 ? (
        results.map((item) => (
          <div key={item.data[0].nasa_id} className='media-item'>
            {item.data[0].media_type === 'image' && item.links[1] ? (
              <Link to={`/library/${item.data[0].nasa_id}`}>
                <img
                  src={item.links[1].href}
                  alt={item.data[0].title}
                  className='media-image'
                />
              </Link>
            ) : null}
          </div>
        ))
      ) : (
        <div className='no-results'>
          <h3>No results found</h3>
          <p>
            Sorry, we couldn't find any image matching your search, but the
            universe is vast. Keep exploring!
          </p>
        </div>
      )}
    </div>
  );
};
