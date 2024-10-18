import Head from 'next/head';

const IdealPetResult = () => {
  // This is just static data. You might fetch this data from an API in a real app.
  const pet = {
    name: 'Goldie',
    type: 'Golden Retriever',
    description: 'Golden Retrievers are friendly, intelligent, and devoted. They are great family pets and have a loving and gentle temperament.',
    imageUrl: '/path-to-golden-retriever-image.jpg' // Make sure to replace this with an actual path
  };

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Your Ideal Pet</title>
      </Head>
      <div className="max-w-sm mx-auto text-center py-10">
        <h1 className="text-2xl font-bold mb-4">Your Ideal Pet is a:</h1>
        <h2 className="text-xl font-semibold mb-2">{pet.type}</h2>
        <img src={pet.imageUrl} alt={pet.type} className="mx-auto w-40 h-40 object-cover rounded-full mb-4"/>
        <h3 className="text-lg mb-2">Meet {pet.name}</h3>
        <p className="mb-4">{pet.description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2">
          Adopt {pet.name} as your virtual pet
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Share to social media
        </button>
      </div>
    </div>
  );
}

export default IdealPetResult;