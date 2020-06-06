import React from 'react';
// import CommenItem from '../../CommenSindleView';
import CommenDoubleView from '../../CommenDoubleView';
class SecondDisplay extends React.Component{
    render(){
        return  <div>
                        <CommenDoubleView wrapClass = "second-hightlight-wrapper" alertClass = "new-alert" status = 'New' titleClass = "title-wraper bold black" 
                        proName = 'MacBook Air' discClass = "description-wrapper black" discription = "Twice the speed. Twice the storage."
                                priceClass = "price-wrapper grey" price = "From $999." linkClass = "links-wrapper" learnMore = 'Learn more' buyNow = 'Buy' 
                                 
                                />
                </div>
    }
}
export default SecondDisplay;