import React, { Component } from 'react'
import FirstDisplay from './BodyConponent/FirstDisplayComponent/FirstDisplay';
import SecondDisplay from './BodyConponent/SecondDisplayComponent/SecondDisplay';
import ThirdDisplay from './BodyConponent/ThirdDisplayComponent/ThirdDisplay';
import FourthDisplay from './BodyConponent/FourthDisplayComponent/FourthDisplay';
import FifthDisplay from './BodyConponent/FifthDisplayComponent/FifthDisplay';
import SixthDisplay from './BodyConponent/SixthDisplayComponent/SixthDisplay';
 class Main extends Component {
    render() {
        return (
            <div>
                <FirstDisplay />
                <SecondDisplay />
                <ThirdDisplay />
                <FourthDisplay />
                <FifthDisplay />
                <SixthDisplay />
            </div>
        )
    }
}
export default Main;