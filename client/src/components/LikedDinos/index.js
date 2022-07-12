import React from 'react';
import { Link } from 'react-router-dom';

const LikedDinos = ({ dinos }) => {
    return (
        <div className = "liked-container">
            <div className="liked-header">
                <span className="liked-text">Liked Dinos</span>
            </div>
            {dinos &&
            dinos.map(dino => (
                <div className="liked-dino" key={dino._id}>
                    {dino.name}
                    <Link to={`/adoption/${dino.name}`}>
                    {dino.name}
              </Link>
                </div>
            ))}
        </div>
    )
};

export default LikedDinos;