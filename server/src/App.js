// src/App.js
import React, { useState } from 'react';
import MBTIForm from './MBTIForm';
import PetRecommendations from './PetRecommendations';
import SoniaImage from './photo/Magic-PN-580105.jpg';
import NathanImage from './photo/1000009615-scaled.jpg';
import TroyImage from './photo/DSC_5343-2-scaled.jpg';
import photo1 from './photo/1000009616.jpg';
import photo2 from './photo/IMG_7128-scaled.jpeg';
import photo3 from './photo/IMG_8221-scaled.jpg';

// Array of pet photos
const petPhotos = [SoniaImage, NathanImage, TroyImage, photo1, photo2, photo3];

// Function to shuffle the array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};

const App = () => {
    const [pets, setPets] = useState([]);
    const [usedPhotos, setUsedPhotos] = useState([]); // Track used photos

    const handlePetsUpdate = () => {
        // Shuffle the pet photos only when the form is submitted
        const shuffledPhotos = shuffleArray([...petPhotos]);

        const recommendedPets = [
            {
                pet_name: "Sonia",
                pet_breed: "Domestic Short hair",
                about_me: "Positive, Gentle, Quiet, Introverted, Curious.",
                reason: "Sonia is a quiet and gentle cat.",
                photo_path: shuffledPhotos[0], // First random photo
            },
            {
                pet_name: "Nathan",
                pet_breed: "Domestic",
                about_me: "Positive, Practical, Independent, Curious.",
                reason: "Nathan is a quiet and independent cat.",
                photo_path: shuffledPhotos[1], // Second random photo
            },
            {
                pet_name: "Troy",
                pet_breed: "Poodle",
                about_me: "Adorable, Friendly, Passionate.",
                reason: "Troy is friendly and adorable.",
                photo_path: shuffledPhotos[2], // Third random photo
            },
        ];

        setPets(recommendedPets);
        setUsedPhotos(shuffledPhotos.slice(0, 3)); // Save used photos
    };

    return (
        <div>
            <MBTIForm onPetsUpdate={handlePetsUpdate} />
            <PetRecommendations pets={pets} />
        </div>
    );
};

export default App;