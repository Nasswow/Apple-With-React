import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/HeaderComponent/Header';
import FirstDisplay from './Components/BodyConponent/FirstDisplayComponent/FirstDisplay';
import SecondDisplay from './Components/BodyConponent/SecondDisplayComponent/SecondDisplay';
import ThirdDisplay from './Components/BodyConponent/ThirdDisplayComponent/ThirdDisplay';
import FourthDisplay from './Components/BodyConponent/FourthDisplayComponent/FourthDisplay';
import FifthDisplay from '././Components/BodyConponent/FifthDisplayComponent/FifthDisplay';
import SixthDisplay from './Components/BodyConponent/SixthDisplayComponent/SixthDisplay';
import UpperFooter from './Components/FooterComponent/UpperFooterComponent/UpperFooter';
import MiddleFooter from './Components/FooterComponent/MiddleFooterComponent/MiddleFooter';
import LowerFooter from './Components/FooterComponent/LowerFooterComponent/LowerFooter';
// import Copyright from './Copyright';

ReactDOM.render(
  <div>
    <Header />
    <FirstDisplay />
    <SecondDisplay />
    <ThirdDisplay />
    <FourthDisplay />
    <FifthDisplay />
    <SixthDisplay />
    <UpperFooter />
    <MiddleFooter />
    <LowerFooter />
    {/* <Copyright /> */}
    </div>,
  document.getElementById('root')
);

