import React from 'react';
import CommenDoubleView from '../../CommenDoubleView';
import banker from './apple-tv-logo.png';
import watch from './watch-series5-logo.png';

class FifthDisplay extends React.Component{
    render(){
        return  (
                    <section className="fifth-heghlight-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <CommenDoubleView wrapClass = "left-side-wrapper col-sm-12 col-md-6" contClass = "left-side-container" topLogoWr = "top-logo-wrapper" bLogo = "logo-wrapper"
                                    tvShowLogo = "tvshow-logo-wraper" watchMore = "watch-more-wrapper" tvAdd = "Watch now on the Apple TV App" bLogo = {banker} />
                              <CommenDoubleView wrapClass = "right-side-wrapper col-sm-12 col-md-6" contClass = "right-side-container"
                                    titleClass = "title-wraper black" proName = "With the Always-On Retina display. You’ve never seen a watch like this. " linkClass = "links-wrapper" wLogo = {watch} learnMore = "Learn more" buyNow = "Buy now" />					
                            </div>
                        </div> 
                    </section>
        );
    }
}
export default FifthDisplay;