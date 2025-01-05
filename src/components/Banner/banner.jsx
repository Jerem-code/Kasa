import React from 'react';
import "./banner.scss";

const Banner = ({title, backgroundHeader, alt}) => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <h1>{title}</h1>
            </div>
            <div className='banner-image'>
                <img src={backgroundHeader} alt={alt} />
            </div>
        </div>
    )
}

export default Banner;