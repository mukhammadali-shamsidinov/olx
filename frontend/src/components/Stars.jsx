import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ totalStars }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (starIndex) => {
        setRating(starIndex + 1);
    };

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        color={index < rating ? '#ffc107' : '#e4e5e9'}
                        style={{ cursor: 'pointer' }}
                    />
                );
            })}
            <p>{rating} out of {totalStars}</p>
        </div>
    );
};

export default StarRating;
