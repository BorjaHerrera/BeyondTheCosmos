import Loading from '../../components/Loading/Loading';
import './Picture.css';
import { useState, useEffect } from 'react';

export const Picture = () => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const DEMO_KEY = import.meta.env.VITE_NASA_API_KEY;
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        setPicture({
          title: res.title,
          url: res.url,
          explanation: res.explanation
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!picture) {
    return <p className='picture-error'>No se pudo obtener la imagen.</p>;
  }
  return (
    <section id='picture'>
      <h1 className='picture-h1'>PICTURE OF THE DAY</h1>
      <div className='img-container'>
        <img
          className='picture-of-the-day'
          src={picture.url}
          alt={picture.title}
        />
      </div>
      <div className='data-picture'>
        <h2>{picture.title}</h2>
        <p>{picture.explanation}</p>
      </div>
    </section>
  );
};
