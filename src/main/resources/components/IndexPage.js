import React from 'react';
import './index.css';  // Import the CSS specific to this page
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="image-box">
          <img src="/images/exam.svg" alt="Quiz" />
        </div>
        <div className="text-box">
          <h1>Spring Boot Quiz App</h1>
          <form className="card">
            <p>Enter Your Name</p>
            <input type="text" name="username" />
            <p className="text-danger warning">Please enter your name</p>
            <button type="submit" className="btn btn-warning">Start Quiz</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage;
