import React from 'react';
import DoubleStructure from '../DoubleStructure';

class FourthDisplay extends React.Component{
    render(){
        return  (
            <section className="fourth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <DoubleStructure wrapperClass="left-side-wrapper" 
                            innerClassName="left-side-container"
                            title= "iPhone 11" description="Just the right amount of everything."
                            price="From $18.70/mo. or $499 with trade‑in."
                            link="Apply now"><a href="">Learn more</a></DoubleStructure>
                        <DoubleStructure wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" titleColor="white" linkColor="white"
                            title="Get the latest CDC response to COVID-19."
                           link="Watch the PSA "/>
                    </div>
                </div> 
	        </section>
        );
    }
}
export default FourthDisplay;