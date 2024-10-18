import React, { useState } from 'react';

const PetCard = ({ dog }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col items-center p-4">
      <div
        className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
        onClick={toggleModal}
      >
        <img src={dog.imageUrl} alt={dog.name} className="w-full h-full object-cover"/>
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-lg font-bold">{dog.name}</h3>
        <p className="text-sm text-gray-600">{dog.breed}</p>
        <p className="text-sm text-gray-600">{dog.gender}, {dog.date}</p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full">
            <h4 className="text-xl font-bold mb-2">Welfare Story of {dog.name}</h4>
            <p>{dog.story}</p>
            <button
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetCard;