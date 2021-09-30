
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
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
          <Route path="/home" >
            <Home />
          </Route>
          <Route exact path="/foods" >
            <Foods />
          </Route>
          <Route path="/foods/:foodId" >
            <FoodDetails />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
