import React from 'react';
import logo from '../../images/icons/logo-sm.png';
import search from '../../images/icons/search-icon-sm.png';
import cart from '../../images/icons/cart-sm.png';
// import './Header.css';

class Header extends React.Component{
    render(){
        return <div>
                    <div className="bgBlack nav-wrapper fixed-top">
                        <div className=" container">
                            <nav className=" navbar navbar-toggleable-sm navbar-expand-md">
                                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                                    ☰
                                </button>
                                <a className="navbar-brand mx-auto" href="#"><img src={logo} /></a>
                                <div className="navbar-collapse collapse">
                                    <ul className="navbar-nav nav-justified w-100 nav-fill">
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Mac</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iPhone</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iPad</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Watch</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">TV</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
                                        <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="#"><img src={search} /></a></li>
                                        <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="#"><img src={cart} /></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
    }
}
export default Header;