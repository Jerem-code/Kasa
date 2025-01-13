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

    // Ne pas afficher les contrôles s'il n'y a qu'une seule image
    if (pictures.length === 1) {
        return (
            <div className="carousel single-image">
                <img 
                    src={pictures[0]} 
                    alt="Photo 1" 
                    className="carousel-image"
                />
            </div>
        );
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

            <div className="carousel-counter">
                {currentIndex + 1}/{totalPictures}
            </div>
        </div>
    );
}

export default Carousel;