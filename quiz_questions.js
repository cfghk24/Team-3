const quizData = [
  {
    id: 1,
    question: "What is your age group?",
    options: [
      { answer: "Child (under 18)", nextQuestionId: 2 },
      { answer: "Adult (18 and over)", nextQuestionId: 3 },
    ],
  },
  {
    id: 2,
    question: "How active is your lifestyle?",
    options: [
      { answer: "Very active", nextQuestionId: 4 },
      { answer: "Moderately active", nextQuestionId: 5 },
      { answer: "Not very active", nextQuestionId: 6 },
    ],
  },
  {
    id: 3,
    question: "What type of pet do you prefer?",
    options: [
      { answer: "Dog", nextQuestionId: 7 },
      { answer: "Cat", nextQuestionId: 8 },
    ],
  },
  {
    id: 4,
    question: "Do you prefer playful or calm pets?",
    options: [
      { answer: "Playful", resultPet: "Puppy" },
      { answer: "Calm", resultPet: "Kitten" },
    ],
  },
  {
    id: 5,
    question: "Are you open to adopting a pet with special needs?",
    options: [
      { answer: "Yes", resultPet: "Older Dog" },
      { answer: "No", resultPet: "Adult Cat" },
    ],
  },
  {
    id: 6,
    question: "How much time can you dedicate to a pet each day?",
    options: [
      { answer: "Less than 1 hour", resultPet: "Low-Maintenance Pet" },
      { answer: "More than 1 hour", resultPet: "Senior Cat" },
    ],
  },
  {
    id: 7,
    question: "What traits do you value most in a dog?",
    options: [
      { answer: "Loyalty", resultPet: "Labrador Retriever" },
      { answer: "Playfulness", resultPet: "Beagle" },
    ],
  },
  {
    id: 8,
    question: "What traits do you value most in a cat?",
    options: [
      { answer: "Affectionate", resultPet: "Ragdoll" },
      { answer: "Independent", resultPet: "Siamese" },
    ],
  }
];