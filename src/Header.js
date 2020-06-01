import React from 'react';
class Header extends React.Component{
    render(){
        return <div>
                    <div className="nav-wrapper fixetop">
                        <div className="container">
                            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                                    ☰
                                </button>
                                {/*</nav><a className="navbar-brand mx-auto" href="#"><img src="images/icons/logo-sm.png"></a>*/}

                                <div className="navbar-collapse collapse">
                                    <ul className="navbar-nav nav-justified w-100 nav-fill">
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Mac</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
                                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
                                        {/* <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="#"><img src="images/icons/search-icon-sm.png"></a></li> */}
                                        {/* <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="#"><img src="images/icons/cart-sm.png"></a></li> */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
    }
}
export default Header;