import Head from 'next/head';
import IdealPetResult from '../Components/IdealPetResult';
import PetCard from '../Components/PetCard';

const ResultsPage = () => {
  // Sample data for dogs
  const dogs = [
    {
      name: 'Rex',
      breed: 'Labrador',
      gender: 'Male',
      date: '2018',
      imageUrl: '/images/labrador.jpg', // Ensure this path is correct and the image exists in your public/images folder
      story: 'Rex has been a loyal and joyful companion...'
    },
    {
      name: 'Bella',
      breed: 'Beagle',
      gender: 'Female',
      date: '2019',
      imageUrl: '/images/beagle.jpg',
      story: 'Bella loves long walks and has been...'
    },
    {
      name: 'Max',
      breed: 'Poodle',
      gender: 'Male',
      date: '2020',
      imageUrl: '/images/poodle.jpg',
      story: 'Max is a smart and energetic dog who loves to play...'
    }
  ];

  return (
    <div>
      <Head>
        <title>Results: Find Your Ideal Pet</title>
      </Head>
      <IdealPetResult />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Meet Our Lovely Dogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dogs.map((dog, index) => (
            <PetCard key={index} dog={dog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;