import React, { useState } from 'react';
import arrow_back from '../../assets/arrow_bck.svg';
import arrow_forward from '../../assets/arrow_fwd.svg';
import './carousel.scss';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPictures = pictures.length;

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? totalPictures - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === totalPictures - 1 ? 0 : currentIndex + 1);
    };

    if (!pictures || pictures.length === 0) {
        return null;
    }

    return (
        <div className="carousel">
            <img 
                src={pictures[currentIndex]} 
                alt={`Photo ${currentIndex + 1}`} 
                className="carousel-image"
            />
            
            <button onClick={goToPrevious} className="carousel-button previous">
                <img src={arrow_back} alt="Précédent" />
            </button>
            <button onClick={goToNext} className="carousel-button next">
                <img src={arrow_forward} alt="Suivant" />
            </button>

            <div className="carousel-dots">
                {pictures.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;