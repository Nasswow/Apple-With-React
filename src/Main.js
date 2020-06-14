import React, { Component } from 'react'
import FirstDisplay from './Components/Body/FirstDisplay/FirstDisplay';
import SecondDisplay from './Components/Body/SecondDisplay/SecondDisplay';
import ThirdDisplay from './Components/Body/ThirdDisplay/ThirdDisplay';
import FourthDisplay from './Components/Body/FourthDisplay/FourthDisplay';
import FifthDisplay from './Components/Body/FifthDisplay/FifthDisplay';
import SixthDisplay from './Components/Body/SixthDisplay/SixthDisplay';
import Youtube from './Components/Body/Youtube/Youtube';
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
                <Youtube />
            </div>
        )
    }
}
export default Main;