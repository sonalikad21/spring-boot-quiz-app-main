import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './result.css';

function Result() {
  const location = useLocation();
  const result = location.state?.result;
  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className="main-container container py-5 px-4">
        <div className="card bg-dark text-light py-5 px-4 mx-auto">
          <img src="/images/exam.svg" alt="Quiz Result" />
          <h3 className="bg-danger text-center mb-5 p-2">Your Score</h3>
          {result && (
            <>
              <div className="d-flex justify-content-center">
                <p>Participant name:&nbsp;&nbsp;</p>
                <p>{result.username}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p>Total correct answer:&nbsp;&nbsp;</p>
                <p>{result.totalCorrect}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p>Total false answer:&nbsp;&nbsp;</p>
                <p>{5 - result.totalCorrect}</p>
              </div>
            </>
          )}
          <div className="d-flex justify-content-center mt-4">
            <button onClick={() => history.push('/score')} className="btn btn-outline-warning mx-auto">View Score Board</button>
            <button onClick={() => history.push('/')} className="btn btn-outline-warning mx-auto">Back to Homepage</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Result;
