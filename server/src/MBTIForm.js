// src/MBTIForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './MBTIForm.css'; // Import the CSS file

const MBTIForm = ({ onPetsUpdate }) => {
    // State for new questions
    const [age, setAge] = useState('');
    const [parentConsent, setParentConsent] = useState('');
    const [residence, setResidence] = useState('');
    const [petPreference, setPetPreference] = useState('');
    const [timeDedication, setTimeDedication] = useState('');
    const [petSize, setPetSize] = useState('');
    const [energyLevel, setEnergyLevel] = useState('');
    const [livingSpace, setLivingSpace] = useState('');
    const [lifestyle, setLifestyle] = useState('');
    const [reasonForPet, setReasonForPet] = useState('');
    const [groomingPreference, setGroomingPreference] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const responses = {
            age,
            parentConsent,
            residence,
            petPreference,
            timeDedication,
            petSize,
            energyLevel,
            livingSpace,
            lifestyle,
            reasonForPet,
            groomingPreference
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/testLLM', responses);
            onPetsUpdate(response.data.response); // Pass the data back to the parent
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="mbti-form">
            <h1>Pet Adoption Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                <h3>1. What is your age?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Under 18" checked={age === 'Under 18'} onChange={() => setAge('Under 18')} required /> Under 18
                    </label>
                    <label>
                        <input type="radio" value="18-30" checked={age === '18-30'} onChange={() => setAge('18-30')} /> 18-30
                    </label>
                    <label>
                        <input type="radio" value="31-50" checked={age === '31-50'} onChange={() => setAge('31-50')} /> 31-50
                    </label>
                    <label>
                        <input type="radio" value="51-64" checked={age === '51-64'} onChange={() => setAge('51-64')} /> 51-64
                    </label>
                    <label>
                        <input type="radio" value="65 and older" checked={age === '65 and older'} onChange={() => setAge('65 and older')} /> 65 and older
                    </label>
                </div>

                {age === 'Under 18' && (
                    <>
                        <h3>2. Have your parents or guardians agreed to have a pet?</h3>
                        <div className="radio-group">
                            <label>
                                <input type="radio" value="Yes" checked={parentConsent === 'Yes'} onChange={() => setParentConsent('Yes')} required /> Yes
                            </label>
                            <label>
                                <input type="radio" value="No" checked={parentConsent === 'No'} onChange={() => setParentConsent('No')} /> No
                            </label>
                        </div>
                    </>
                )}

                {age !== 'Under 18' && (
                    <>
                        <h3>2. What type of residence do you live in?</h3>
                        <div className="radio-group">
                            <label>
                                <input type="radio" value="Apartment" checked={residence === 'Apartment'} onChange={() => setResidence('Apartment')} required /> Apartment
                            </label>
                            <label>
                                <input type="radio" value="House" checked={residence === 'House'} onChange={() => setResidence('House')} /> House
                            </label>
                            <label>
                                <input type="radio" value="Public housing estate" checked={residence === 'Public housing estate'} onChange={() => setResidence('Public housing estate')} /> Public housing estate
                            </label>
                        </div>
                    </>
                )}

                <h3>3. Do you have a specific pet preference?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Dog" checked={petPreference === 'Dog'} onChange={() => setPetPreference('Dog')} required /> Dog
                    </label>
                    <label>
                        <input type="radio" value="Cat" checked={petPreference === 'Cat'} onChange={() => setPetPreference('Cat')} /> Cat
                    </label>
                    <label>
                        <input type="radio" value="Rabbit" checked={petPreference === 'Rabbit'} onChange={() => setPetPreference('Rabbit')} /> Rabbit
                    </label>
                    <label>
                        <input type="radio" value="Not sure" checked={petPreference === 'Not sure'} onChange={() => setPetPreference('Not sure')} /> Not sure, help me find my perfect match!
                    </label>
                </div>

                <h3>4. How much time can you dedicate to pet care daily?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Less than 30 minutes" checked={timeDedication === 'Less than 30 minutes'} onChange={() => setTimeDedication('Less than 30 minutes')} required /> Less than 30 minutes
                    </label>
                    <label>
                        <input type="radio" value="30 minutes to 1 hour" checked={timeDedication === '30 minutes to 1 hour'} onChange={() => setTimeDedication('30 minutes to 1 hour')} /> 30 minutes to 1 hour
                    </label>
                    <label>
                        <input type="radio" value="More than 1 hour" checked={timeDedication === 'More than 1 hour'} onChange={() => setTimeDedication('More than 1 hour')} /> More than 1 hour
                    </label>
                </div>

                <h3>5. What size pet are you looking for?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Small" checked={petSize === 'Small'} onChange={() => setPetSize('Small')} required /> Small (e.g., Chihuahua, Hamster)
                    </label>
                    <label>
                        <input type="radio" value="Medium" checked={petSize === 'Medium'} onChange={() => setPetSize('Medium')} /> Medium (e.g., Corgi, Cat)
                    </label>
                    <label>
                        <input type="radio" value="Large" checked={petSize === 'Large'} onChange={() => setPetSize('Large')} /> Large (e.g., Golden Retriever)
                    </label>
                    <label>
                        <input type="radio" value="No preference" checked={petSize === 'No preference'} onChange={() => setPetSize('No preference')} /> No preference
                    </label>
                </div>

                <h3>6. How would you describe your ideal pet's energy level?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Low" checked={energyLevel === 'Low'} onChange={() => setEnergyLevel('Low')} required /> Low (couch potato)
                    </label>
                    <label>
                        <input type="radio" value="Medium" checked={energyLevel === 'Medium'} onChange={() => setEnergyLevel('Medium')} /> Medium (playful but not hyperactive)
                    </label>
                    <label>
                        <input type="radio" value="High" checked={energyLevel === 'High'} onChange={() => setEnergyLevel('High')} /> High (very active and energetic)
                    </label>
                </div>

                <h3>7. What's your living space like?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Small apartment" checked={livingSpace === 'Small apartment'} onChange={() => setLivingSpace('Small apartment')} required /> Small apartment
                    </label>
                    <label>
                        <input type="radio" value="Medium apartment" checked={livingSpace === 'Medium apartment'} onChange={() => setLivingSpace('Medium apartment')} /> Medium apartment
                    </label>
                    <label>
                        <input type="radio" value="Large apartment or house" checked={livingSpace === 'Large apartment or house'} onChange={() => setLivingSpace('Large apartment or house')} /> Large apartment or house
                    </label>
                </div>

                <h3>8. How would you describe your lifestyle?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Very busy" checked={lifestyle === 'Very busy'} onChange={() => setLifestyle('Very busy')} required /> Very busy, often not at home
                    </label>
                    <label>
                        <input type="radio" value="Balanced" checked={lifestyle === 'Balanced'} onChange={() => setLifestyle('Balanced')} /> Balanced, with some time at home
                    </label>
                    <label>
                        <input type="radio" value="Mostly at home" checked={lifestyle === 'Mostly at home'} onChange={() => setLifestyle('Mostly at home')} /> Mostly at home
                    </label>
                </div>

                <h3>9. What's your primary reason for wanting a pet?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Companionship" checked={reasonForPet === 'Companionship'} onChange={() => setReasonForPet('Companionship')} required /> Companionship
                    </label>
                    <label>
                        <input type="radio" value="Exercise motivation" checked={reasonForPet === 'Exercise motivation'} onChange={() => setReasonForPet('Exercise motivation')} /> Exercise motivation
                    </label>
                    <label>
                        <input type="radio" value="Therapy" checked={reasonForPet === 'Therapy'} onChange={() => setReasonForPet('Therapy')} /> Therapy/emotional support
                    </label>
                    <label>
                        <input type="radio" value="Family addition" checked={reasonForPet === 'Family addition'} onChange={() => setReasonForPet('Family addition')} /> Family addition
                    </label>
                </div>

                <h3>10. How do you feel about pet grooming and maintenance?</h3>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Low-maintenance" checked={groomingPreference === 'Low-maintenance'} onChange={() => setGroomingPreference('Low-maintenance')} required /> Prefer low-maintenance pets
                    </label>
                    <label>
                        <input type="radio" value="Regular grooming" checked={groomingPreference === 'Regular grooming'} onChange={() => setGroomingPreference('Regular grooming')} /> Don't mind regular grooming
                    </label>
                    <label>
                        <input type="radio" value="Enjoy grooming" checked={groomingPreference === 'Enjoy grooming'} onChange={() => setGroomingPreference('Enjoy grooming')} /> Enjoy spending time grooming and caring for pets
                    </label>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className="link-container">
                <p>Click out your virtual pet before adopting a new one!</p>
                <a href="http://localhost:3000/" className="link-button">Go to Pet Adoption</a>
            </div>
        </div>
    );
};

export default MBTIForm;