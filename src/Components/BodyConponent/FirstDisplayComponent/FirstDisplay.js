import React from 'react';
import CommenDoubleView from '../../CommenDoubleView';
class FirstDisplay extends React.Component{
    render(){
        return  <div>
                    <CommenDoubleView alertClass = "new-alert" status = 'New' proName = 'iPad Pro' discription = 'Your next computer is not a computer'
                                learnMore = 'Learn more' buyNow = 'Buy' wrapClass = "first-hightlight-wrapper"
                                titleClass = "title-wraper bold black" linkClass = "links-wrapper" topLogoWr = "d-none" tvShowLogo = "d-none"
                                />
                </div>
    }
}
export default FirstDisplay;