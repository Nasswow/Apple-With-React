import React, { Component} from 'react';
import Header from './HeaderComponent/Header';
import Main from './Main';
import Footer from './FooterComponent/Footer.js';
class App extends Component {
	render(){
	  return (
	    <div>
	        <Header />
            <Main />
            <Footer/>
	    </div>
	  )		
	}

}
export default App

