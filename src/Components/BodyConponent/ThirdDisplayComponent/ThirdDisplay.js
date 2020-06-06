import React from 'react';
// import CommenItem from '../../CommenSindleView';
import CommenDoubleView from '../../CommenDoubleView';
class ThirdDisplay extends React.Component{
    render(){
        return  <div>
                        <CommenDoubleView wrapClass = "third-hightlight-wrapper" titleClass = "title-wraper bold" 
                        proName = 'iPhone 11 Pro' discClass = "description-wrapper" discription = "Pro cameras. Pro display. Pro performance."
                                priceClass = "price-wrapper" price = "From $24.95/mo. or $599 with trade‑in." linkClass = "links-wrapper" learnMore = 'Learn more' buyNow = 'Buy' 
                                 
                                />
                   
                                
                </div>
    }
}
export default ThirdDisplay;