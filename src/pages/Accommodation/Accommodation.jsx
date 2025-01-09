import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/carousel';
import accommodations from '../../datas/logements.json';
import './accomodation.scss';
import Collapse from '../../components/Collapse/collapse';

function Accommodation() {
    const { id } = useParams();
    const accommodation = accommodations.find(acc => acc.id === id);

    if (!accommodation) {
        return <Navigate to="/404" />;
    }

    return (
        <div className="accommodation-container">
            <div className="accommodation-container">
                <Carousel pictures={accommodation.pictures} />
            </div>
            
            <div className="accommodation-info">
                <div className="main-info">
                    <div className="title-location">
                        <h1>{accommodation.title}</h1>
                        <p>{accommodation.location}</p>
                        <div className="tags">
                            {accommodation.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="host-rating">
                        <div className="host">
                            <p>{accommodation.host.name}</p>
                            <img src={accommodation.host.picture} alt={accommodation.host.name} />
                        </div>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className={star <= parseInt(accommodation.rating) ? 'star active' : 'star'}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="description-equipment">
                    <Collapse 
                        title="Description" 
                        content={accommodation.description} 
                    />
                    <Collapse 
                        title="Équipements" 
                        content={accommodation.equipments} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Accommodation;