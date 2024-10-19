import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import ScoreboardPage from './components/ScoreboardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/score" component={ScoreboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
