import React from 'react';


class CommenDoubleView extends React.Component{
    render(){
        return  (
                <div className={this.props.wrapClass}>
                    <div className={this.props.contClass}>
                        <div className={this.props.alertClass}>
                            {this.props.status}
                        </div>
                        <div className={this.props.topLogoWr}>
                            <div className={this.props.logoWr}>
                                <img src={this.props.bLogo} />
                            </div>
                        </div>
                        <div className={this.props.tvShowLogo}>
                                <img src={this.props.wLogo} />
                        </div>
                        <div className={this.props.titleClass}>
                            {this.props.proName} 
                        </div> 
                        <div className={this.props.discClass}>
                            {this.props.discription}
                        </div>
                        <div className={this.props.priceClass}>
                            {this.props.price}
                        </div>
                        <div className={this.props.watchMore}>
                            <a href="#">{this.props.tvAdd}</a>
                        </div>
                        <div className={this.props.linkClass}>
                            <ul>
                                <li><a href="">{this.props.learnMore}</a></li>
                                <li><a href="">{this.props.buyNow}</a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
        )
    }
}
export default CommenDoubleView;