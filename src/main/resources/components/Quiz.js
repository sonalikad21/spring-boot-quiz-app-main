import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './quiz.css';

function Quiz({ location }) {
  const [questions, setQuestions] = useState([
    // Replace with real questions data from an API or state
    { title: 'What is 2+2?', optionA: '3', optionB: '4', optionC: '5', ans: 2, quesId: 1 },
    // Add more questions
  ]);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar />
      <div className="container py-5 px-4">
        <h1 className="bg-danger text-light">Only Select The Correct Answers</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((ques, index) => (
            <div key={ques.quesId} className="ques-box bg-dark text-light">
              <p className="title">{ques.title}</p>
              <div className="option">
                <input type="radio" name={`questions[${index}]`} value="1" onChange={() => handleAnswerChange(index, 1)} />
                <p>{ques.optionA}</p>
              </div>
              <div className="option">
                <input type="radio" name={`questions[${index}]`} value="2" onChange={() => handleAnswerChange(index, 2)} />
                <p>{ques.optionB}</p>
              </div>
              <div className="option">
                <input type="radio" name={`questions[${index}]`} value="3" onChange={() => handleAnswerChange(index, 3)} />
                <p>{ques.optionC}</p>
              </div>
            </div>
          ))}
          <button type="submit" className="btn btn-danger d-block mx-auto mt-4">Submit Answer</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Quiz;
