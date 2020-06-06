import React from 'react';
// import CommenItem from '../../CommenSindleView';
import CommenDoubleView from '../../CommenDoubleView';
class FirstDisplay extends React.Component{
    render(){
        return  <div>
                    <CommenDoubleView alertClass = "new-alert" status = 'New' proName = 'iPad Pro' discription = 'Your next computer is not a computer'
                                learnMore = 'Learn more' buyNow = 'Buy' wrapClass = "first-hightlight-wrapper"
                                titleClass = "title-wraper bold black" linkClass = "links-wrapper"
                                />
                </div>
    }
}
export default FirstDisplay;