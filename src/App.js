import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Team from './components/pages/Team';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/team' exact component={Team}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/signup' exact component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
