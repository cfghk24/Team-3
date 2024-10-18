// src/PetRecommendations.js
import React from 'react';
import './PetRecommendations.css'; // Import the CSS file

const PetRecommendations = ({ pets }) => {
    return (
        <div className="pet-recommendations">
            <h2>Recommended Pets:</h2>
            {pets.length > 0 ? (
                <div className="pet-cards">
                    {pets.map((pet, index) => (
                        <div className="pet-card" key={index}>
                            <img src={pet.photo_path} alt={pet.pet_name} className="pet-image" />
                            <h3>{pet.pet_name}</h3>
                            <p><strong>Breed:</strong> {pet.pet_breed}</p>
                            <p>{pet.about_me}</p>
                            <p><em>{pet.reason}</em></p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
};

export default PetRecommendations;