import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ImageDetail.css';
import Loading from '../../components/Loading/Loading';

export const ImageDetail = () => {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://images-api.nasa.gov/search?q=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const item = data.collection.items[0];

        if (item) {
          const imageData = item.data[0];
          setImageDetails({
            title: imageData.title,
            imageUrl:
              item.links?.find((link) => link.rel === 'canonical')?.href ||
              item.links?.[1]?.href,
            description: imageData.description
          });
        } else {
          console.error('No se encontraron detalles para esta imagen.');
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (!imageDetails) return <p>No image details found.</p>;

  return (
    <section id='image-detail'>
      <h1 className>EVERY IMAGE TELLS A STORY</h1>
      <div className='img-detail-container'>
        <img
          className='detail-picture'
          src={imageDetails.imageUrl}
          alt={imageDetails.title}
        />
      </div>
      <div className='data-detail-picture'>
        <h2>{imageDetails.title}</h2>
        <p>{imageDetails.description}</p>
      </div>
    </section>
  );
};
