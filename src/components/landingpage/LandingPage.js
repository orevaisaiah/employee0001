import React from 'react';
import './LandingPage.css';
import { useHistory } from 'react-router-dom'
import Header from './Header';
import Lcard from './Lcard';
import Image1 from './Image1';
import Lcard2 from './Lcard2';
import Lcard3 from './Lcard3';
import Lcard4 from './Lcard4';
import Lcard5 from './Lcard5';
import Footer from './Footer';



const LandingPage = () => {
    let history = useHistory()
    const onLoginClick=() => {
        history.push('/login')
    }
    const onSignupClick=() => {
        history.push('/signup')
    }
  
    
    return (
        <div className="landing-page container-fluid">
                <Header onClickLn={onLoginClick} onClickSn={onSignupClick} />
                <Lcard />
                <div style={{ width: "80%", margin: "auto" }}>
                    <Image1 />
                </div>
                <Lcard2 />
                <Lcard3 />
                <Lcard4 />
                <Lcard5 />
                <Footer />
            </div>
    )
}

export default LandingPage
