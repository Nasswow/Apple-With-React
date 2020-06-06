import React, { Component } from 'react'

export default class CommenSingleView extends Component {
    render() {
        return (
            <div>
                 <section className={this.props.sectionCName}>
                        <div className="container">
                            <div className="new-alert">
                                {this.props.status}
                            </div>
                        <div className={this.props.productCName}>
                                {this.props.productTitle} 
                            </div> 
                            <div className={this.props.discriptionCName}>
                                {this.props.discription}
                            </div>
                            <div className={this.props.priceCName}>
                                {this.props.price}
                            </div>
                            <div className={this.props.linkCName}>
                                <ul>
                                    <li><a href="">{this.props.more}</a></li>
                                    <li><a href="">{this.props.buy}</a></li>
                                </ul> 
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}
