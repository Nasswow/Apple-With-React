import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import FirstDisplay from './FirstDisplay';
import SecondDisplay from './SecondDisplay';
import ThirdDisplay from './ThirdDisplay';
import FourthDisplay from './FourthDisplay';
import FifthDisplay from './FifthDisplay';
import Footer from './Footer';
import Copyright from './Copyright';

ReactDOM.render(
  <div>
    <Header />
    <FirstDisplay />
    <SecondDisplay />
    <ThirdDisplay />
    <FourthDisplay />
    <FifthDisplay />
    <Footer />
    <Copyright />
    </div>,
  document.getElementById('root')
);

