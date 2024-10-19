import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  const [username, setUsername] = useState('');
  const [warning, setWarning] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      setWarning('Please enter your name!');
    } else {
      setWarning('');
      history.push('/quiz', { username });
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container container py-5 px-4">
        <div className="image-box">
          <img src="/images/exam.svg" alt="Quiz Illustration" />
        </div>
        <div className="text-box">
          <h1 className="mb-5 text-center">Spring Boot Quiz App</h1>
          <form className="card bg-dark py-5 px-4" onSubmit={handleSubmit}>
            <p>Enter Your Name</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            {warning && <p className="text-danger warning">{warning}</p>}
            <button type="submit" className="btn btn-warning">Start Quiz</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
