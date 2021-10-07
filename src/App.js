import { Event, Calendar, EventsList } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
          <div className="main__content">
            <Calendar></Calendar>
            <EventsList></EventsList>
          </div>
        </Route>
        <Route path="/event">
          <Event></Event>
        </Route>
      </Router>
    </div>
  );
}

export default App;
