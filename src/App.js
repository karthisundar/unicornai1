import React,{Component , lazy , Suspense} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import NLP from './components/pages/NLP';
import Vision from './components/pages/Vision';
import Dashborad from './components/pages/Dashborad';
import Devlopment from './components/pages/Devlopment'
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';


function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/NLP' component={NLP} />
                <Route path='/Vision' component={Vision} />
                <Route path='/Dashborad' component={Dashborad} />
                <Route path='/Devlopment' component={Devlopment}/>

        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
      
    </Router>
    

  );
}

export default App;
