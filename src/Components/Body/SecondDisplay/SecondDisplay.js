import React from 'react';
import SingleStructure from '../SingleStructure';
// import CommenDoubleView from '../../CommenDoubleView';
class SecondDisplay extends React.Component{
    render(){
        return  <div>
                     <section className="second-hightlight-wrapper">
				        <SingleStructure  alert="New" titleColor="black" title="MacBook Air" priceColor ="grey" price = "From $999."
				            colorClass="black" description="Twice the speed. Twice the storage."
				        />
	                </section>
                </div>
    }
}
export default SecondDisplay;