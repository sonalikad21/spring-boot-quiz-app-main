import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './score.css';

function ScoreBoard({ scores }) {
  return (
    <>
      <Navbar />
      <div className="main-container container py-5 px-4">
        <h3 className="bg-danger text-center mb-5 p-2">Top Scores Of All Time</h3>
        <table className="bg-dark text-light">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index}>
                <td>{score.username}</td>
                <td>{score.totalCorrect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default ScoreBoard;
