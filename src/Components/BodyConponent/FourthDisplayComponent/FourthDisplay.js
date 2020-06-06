import React from 'react';
import CommenDoubleView from '../../CommenDoubleView';


class FourthDisplay extends React.Component{
    render(){
        return  (
                    <section className="fourth-heghlight-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <CommenDoubleView wrapClass = "left-side-wrapper col-sm-12 col-md-6" contClass = "left-side-container"
                                    titleClass = "title-wraper bold" proName = "iPhone 11 " discClass = "description-wraper" discription = "Just the right amount of everything."
                                    priceClass = "price-wrapper" price = "From $18.70/mo. or $499 with trade‑in." linkClass = "links-wrapper" learnMore = "Learn More" buyNow = "Buy Now"/>
                              <CommenDoubleView wrapClass = "right-side-wrapper col-sm-12 col-md-6" contClass = "right-side-container"
                                    titleClass = "title-wraper white" proName = "Get the latest CDC response to COVID-19. " linkClass = "links-wrapper white" learnMore = "Learn More" buyNow = "Get more info"/>					
                            </div>
                        </div> 
                    </section>
        );
    }
}
export default FourthDisplay;