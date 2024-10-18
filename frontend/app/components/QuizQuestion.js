const quizData = [
    {
      id: 1,
      question: "What is your age?",
      options: [
        { answer: "Under 18", nextQuestionId: 2 },
        { answer: "18-30", nextQuestionId: 3 },
        { answer: "31-50", nextQuestionId: 3 },
        { answer: "51-64", nextQuestionId: 3 },
        { answer: "65 and older", nextQuestionId: 3 },
      ],
    },
    {
      id: 2,
      question: "Have your parents or guardians agreed to have a pet?",
      options: [
        { answer: "Yes", nextQuestionId: 4 },
        { answer: "No", nextQuestionId: 'virtualPet' },
      ],
    },
    {
      id: 3,
      question: "What type of residence do you live in?",
      options: [
        { answer: "Apartment", nextQuestionId: 4 },
        { answer: "House", nextQuestionId: 4 },
        { answer: "Public housing estate", nextQuestionId: 4 },
      ],
    },
    {
      id: 4,
      question: "Do you have a specific pet preference?",
      options: [
        { answer: "Dog", nextQuestionId: 5 },
        { answer: "Cat", nextQuestionId: 5 },
        { answer: "Rabbit", nextQuestionId: 5 },
        { answer: "Not sure, help me find my perfect match!", nextQuestionId: 5 },
      ],
    },
    {
      id: 5,
      question: "How much time can you dedicate to pet care daily?",
      options: [
        { answer: "Less than 30 minutes", nextQuestionId: 6 },
        { answer: "30 minutes to 1 hour", nextQuestionId: 6 },
        { answer: "More than 1 hour", nextQuestionId: 6 },
      ],
    },
    {
      id: 6,
      question: "What size pet are you looking for?",
      options: [
        { answer: "Small (e.g., Chihuahua, Hamster)", nextQuestionId: 7 },
        { answer: "Medium (e.g., Corgi, Cat)", nextQuestionId: 7 },
        { answer: "Large (e.g., Golden Retriever)", nextQuestionId: 7 },
        { answer: "No preference", nextQuestionId: 7 },
      ],
    },
    {
      id: 7,
      question: "How would you describe your ideal pet's energy level?",
      options: [
        { answer: "Low (couch potato)", nextQuestionId: 8 },
        { answer: "Medium (playful but not hyperactive)", nextQuestionId: 8 },
        { answer: "High (very active and energetic)", nextQuestionId: 8 },
      ],
    },
    {
      id: 8,
      question: "What's your living space like?",
      options: [
        { answer: "Small apartment", nextQuestionId: 9 },
        { answer: "Medium apartment", nextQuestionId: 9 },
        { answer: "Large apartment or house", nextQuestionId: 9 },
      ],
    },
    {
      id: 9,
      question: "How would you describe your lifestyle?",
      options: [
        { answer: "Very busy, often not at home", nextQuestionId: 10 },
        { answer: "Balanced, with some time at home", nextQuestionId: 10 },
        { answer: "Mostly at home", nextQuestionId: 10 },
      ],
    },
    {
      id: 10,
      question: "What's your primary reason for wanting a pet?",
      options: [
        { answer: "Companionship", nextQuestionId: 11 },
        { answer: "Exercise motivation", nextQuestionId: 11 },
        { answer: "Therapy/emotional support", nextQuestionId: 11 },
        { answer: "Family addition", nextQuestionId: 11 },
      ],
    },
    {
      id: 11,
      question: "How do you feel about pet grooming and maintenance?",
      options: [
        { answer: "Prefer low-maintenance pets", nextQuestionId: 'result' },
        { answer: "Don't mind regular grooming", nextQuestionId: 'result' },
        { answer: "Enjoy spending time grooming and caring for pets", nextQuestionId: 'result' },
      ],
    },
    {
      id: 'virtualPet',
      question: "We understand that you can't have a real pet right now, but don't worry! You can still find your perfect virtual pet companion. Let's continue the survey to match you with a virtual pet that suits your personality and preferences.",
      options: [
        { answer: "Continue", nextQuestionId: 4 },
      ],
    },
  ];