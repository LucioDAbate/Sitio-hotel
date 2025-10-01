import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

const images = [
    '/imagesCarousel/514_4448.jpg',
    '/imagesCarousel/514_4555.jpeg',
    '/imagesCarousel/514_4693.jpeg'
]
const Slider = () => {
    const [imagenActual, setImagenActual] = useState(0);
    const siguienteImagen = () => {
        setImagenActual((prev) => (prev + 1) % images.length);
    }
    const anteriorImagen = () => {
        setImagenActual((prev) => (prev - 1 + images.length) % images.length);
    }

    useEffect(() => {
      const id = setInterval(() => {
        setImagenActual((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(id);
    }, []);
    return (
      <div className={styles.container}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={anteriorImagen} aria-label="Anterior">←</button>
        <img
          className={styles.image}
          src={images[imagenActual]}
          alt={`Image ${imagenActual + 1}`}
        />
        <button className={`${styles.arrow} ${styles.right}`} onClick={siguienteImagen} aria-label="Siguiente">→</button>
      </div>
    );
};

export default Slider;
