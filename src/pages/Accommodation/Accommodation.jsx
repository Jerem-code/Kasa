import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import accommodations from '../../datas/logements.json';
import './accommodation.scss';

function Accommodation() {
    const { id } = useParams();
    const accommodation = accommodations.find(acc => acc.id === id);

    if (!accommodation) {
        return <Navigate to="/404" />;
    }

    return (
        <div className="accommodation-container">
            <div className="main-image">
                <img src={accommodation.pictures[0]} alt={accommodation.title} />
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
                    <div className="description">
                        <h2>Description</h2>
                        <p>{accommodation.description}</p>
                    </div>
                    <div className="equipment">
                        <h2>Équipements</h2>
                        <ul>
                            {accommodation.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accommodation;