import { useState, useEffect } from 'react'

import './App.scss';
import dividerDesktop from './assets/images/pattern-divider-desktop.svg';
import dividerMobile from './assets/images/pattern-divider-mobile.svg';

const App = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        console.log('[First time] Call API')
        fetch('https://api.adviceslip.com/advice')
            .then(data => data.json())
            .then((quote) => {
                setQuote(quote)
            })
    }, [])

    const randomHandle = () => {
        console.log('[Click] Call API')

        const randomButton = document.querySelector('.dice-button');
        randomButton.disabled = true;
        
        setTimeout(() => {
            randomButton.disabled = false;
        }, 2000);
        
        fetch('https://api.adviceslip.com/advice')
            .then(data => data.json())
            .then((quote) => {
                setQuote(quote)
            })
        
    }

    return (
        <div id='app'>
            <p className='title'>ADVICE { quote !== null ? `#${quote.slip.id}` : '' }</p>
            <p className='quote'>"{ quote !== null ? `${quote.slip.advice}` : 'Loading...' }"</p>
            <div className="divider">
                <img className='divider-desktop' src={dividerDesktop} alt="Divider Desktop" />
                <img className='divider-mobile' src={dividerMobile} alt="Divider Mobile" />
            </div>

            <button className="dice-button" onClick={randomHandle}></button>
        </div>
    )
}

export default App

