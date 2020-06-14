import React from 'react';
import SingleStructure from '../SingleStructure';
// import CommenDoubleView from '../../CommenDoubleView';
class ThirdDisplay extends React.Component{
    render(){
        return  <div>
                    <section className="third-hightlight-wrapper">
                        <SingleStructure titleColor= "white" title="iPhone 11 Pro" priceColor ="grey" 
                            price = "From $24.95/mo. or $599 with trade‑in."
			                colorClass="white" description="Pro cameras. Pro display. Pro performance."
				        />
	                </section>
                </div>
    }
}
export default ThirdDisplay;