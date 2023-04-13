import React from 'react';
import Header from './component/Header';
import Carousel from './component/Carousel';
import About from './component/About';
import Cards from './component/Cards';
import Footer from './component/Footer';
import './green.css';

const App = (props) => {
 
 return (
    <div className='main-container'>
    <Header />
    <Carousel />
   <Cards />
    <Footer />
    </div>
  )
}

export default App
