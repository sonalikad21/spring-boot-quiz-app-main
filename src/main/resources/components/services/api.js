export const fetchQuizQuestions = async () => {
    const response = await fetch('/api/quiz');
    const data = await response.json();
    return data;
  };
  
