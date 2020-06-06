import React from 'react';
import CommenDoubleView from '../../CommenDoubleView';
const arcade = './images/icons/arcade.png';
const applecard = './images/icons/apple-card-logo.png';
class SixthDisplay extends React.Component{
    render(){
        return  <div>
        
                    <section className="sixth-heghlight-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <CommenDoubleView wrapClass = "left-side-wrapper col-sm-12 col-md-6" contClass = "left-side-container" topLogoWr = "top-logo-wrapper" bLogo = "logo-wrapper"
                                 linkCName = "links-wrapper" topLogoWr = "top-logo-wrapper" logoWr = "logo-wrapper" bLogo = {arcade} titleClass = "title-wraper white" proName= "Agent 8 is a small hero on a big mission."/>
                                <CommenDoubleView wrapClass = "right-side-wrapper col-sm-12 col-md-6" contClass = "right-side-container"
                                 titleClass = "title-wraper" proName = "Apple Card Monthly Installments"
                                     linkClass = "links-wrapper" learnMore = "Learn More" buyNow = "Apply now" topLogoWr = "top-logo-wrapper" logoWr = "logo-wrapper" bLogo = {applecard}/>					
                            </div>
                        </div> 
                    </section>
                    <section className="sixth-heghlight-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                               {/*
                                <div className="right-side-wrapper col-sm-12 col-md-6">
                                    <div className="right-side-container">
                                        <div className="title-wraper">
                                            Apple Card Monthly Installments 
                                        </div> 
                                        <div className="description-wraper">
                                            Pay for your next iPhone over time, interest-free with Apple Card.
                                        </div>
                                        <div className="links-wrapper">
                                            <ul>
                                                <li><a href="">Learn more</a></li>
                                                <li><a href="">Apply now</a></li>
                                            </ul> 
                                        </div>
                                    </div>
                                </div>					 */}
                            </div>
                        </div> 
	                </section>
                </div>
    }
}
export default SixthDisplay;