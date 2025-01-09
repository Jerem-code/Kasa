import React, { useState } from 'react';
import arrow_collapse from '../../assets/arrow_collapse.svg';
import './collapse.scss';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button 
                className={`collapse-header ${isOpen ? 'active' : ''}`}
                onClick={toggleCollapse}
            >
                <h2>{title}</h2>
                <img 
                    src={arrow_collapse} 
                    alt="flèche" 
                    className={`arrow ${isOpen ? 'rotated' : ''}`}
                />
            </button>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {typeof content === 'string' ? (
                    <p>{content}</p>
                ) : (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Collapse;
