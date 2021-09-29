
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Route exact path="/foods" >
            <Foods />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
