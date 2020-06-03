import React from 'react';
import Toggle from './Toggle';
class MiddleFooter extends React.Component{
    render(){
        return(
                <div>
                    <footer className="footer-wrapper">
                        <div className="container">
                            <div className="footer-links-wrapper row"> 
                                <div className="links-wrapper-1 col-sm-12 col-md">
                                    <h3 className = "fLinkTitle">Shop and Learn</h3>
                                    <ul className="fList">
                                        <li><a href="#">Mac</a></li>
                                        <li><a href="#">iPad</a></li>
                                        <li><a href="#">iPhone</a></li>
                                        <li><a href="#">Watch</a></li>
                                        <li><a href="#">TV</a></li>
                                        <li><a href="#">Music</a></li>
                                        <li><a href="#">AirPods</a></li>
                                        <li><a href="#">HomePod</a></li>
                                        <li><a href="#">iPod touch</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Gift Cards</a></li>
                                    </ul>
                                </div> 
                                <div className="links-wrapper-2 col-sm-12 col-md">
                                    <h3 className = "fLinkTitle">Services</h3>
                                    <ul className="fList">
                                        <li><a href="#">Apple Music</a></li>
                                        <li><a href="#">Apple News+</a></li>
                                        <li><a href="#">Apple TV+</a></li>
                                        <li><a href="#">Apple Arcade</a></li>
                                        <li><a href="#">Apple Card</a></li>
                                        <li><a href="#">iCloud</a></li>
                                    </ul>
                                    <h3 className = "fLinkTitle">Account</h3>
                                    <ul className="fList">
                                        <li><a href="#">Manage Your Apple ID</a></li>
                                        <li><a href="#">Apple Store Account</a></li>
                                        <li><a href="#">iCloud.com</a></li>
                                    </ul>					
                                </div> 
                                <div className="links-wrapper-3 col-sm-12 col-md">
                                    <h3 className = "fLinkTitle">Apple Store</h3>
                                    <ul className="fList">
                                        <li><a href="#">Find a Store</a></li>
                                        <li><a href="#">Genius Bar</a></li>
                                        <li><a href="#">Today at Apple</a></li>
                                        <li><a href="#">Apple Camp</a></li>
                                        <li><a href="#">Field Trip</a></li>
                                        <li><a href="#">Apple Store App</a></li>
                                        <li><a href="#">Refurbished and Clearance</a></li>
                                        <li><a href="#">Financing</a></li>
                                        <li><a href="#">Apple Trade In</a></li>
                                        <li><a href="#">Order Status</a></li>
                                        <li><a href="#">Shopping Help</a></li>
                                    </ul>
                                </div>  
                                <div className="links-wrapper-4 col-sm-12 col-md">
                                    <h3 className = "fLinkTitle">For Business</h3>
                                    <ul className="fList">
                                        <li><a href="#">Apple and Business</a></li>
                                        <li><a href="#">Shop for Business</a></li>
                                    </ul>		
                                    <h3 className = "fLinkTitle">For Education</h3>
                                    <ul className="fList">
                                        <li><a href="#">Apple and Education</a></li>
                                        <li><a href="#">Shop for College</a></li>
                                    </ul>
                                    <h3 className = "fLinkTitle">For Healthcare</h3>
                                    <ul className="fList">
                                        <li><a href="#">Manage Your Apple ID</a></li>
                                        <li><a href="#">Apple Store Account</a></li>
                                        <li><a href="#">iCloud.com</a></li>
                                    </ul>	
                                    <h3 className = "fLinkTitle">For Government</h3>
                                    <ul className="fList">
                                        <li><a href="#">Apple and Education</a></li>
                                        <li><a href="#">Shop for College</a></li>
                                    </ul>
                                </div> 
                                <div className="links-wrapper-5 col-sm-12 col-md">
                                    <h3 className = "fLinkTitle">Apple Values</h3>
                                    <ul className="fList">
                                        <li><a href="#">Find a Store</a></li>
                                        <li><a href="#">Genius Bar</a></li>
                                        <li><a href="#">Today at Apple</a></li>
                                        <li><a href="#">Apple Camp</a></li>
                                        <li><a href="#">Field Trip</a></li>
                                        <li><a href="#">Apple Store App</a></li>
                                    </ul>
                                    <h3 className = "fLinkTitle">About Apple</h3>
                                    <ul className="fList">
                                        <li><a href="#">Find a Store</a></li>
                                        <li><a href="#">Genius Bar</a></li>
                                        <li><a href="#">Today at Apple</a></li>
                                        <li><a href="#">Apple Camp</a></li>
                                        <li><a href="#">Field Trip</a></li>
                                        <li><a href="#">Apple Store App</a></li>
                                    </ul>						
                                </div> 
                            </div>
                            <div className="my-apple-wrapper"> 
                                More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
                            </div>
                        </div>
                    </footer>
                </div>
        );
    }
}
export  default MiddleFooter;