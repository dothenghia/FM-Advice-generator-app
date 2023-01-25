import { useState, useEffect } from 'react'

let count = 0;

const App = () => {
    const [advice, setAdvice] = useState(null);

    useEffect(() => {
        console.log('Call API (First time)')
        fetch('https://api.adviceslip.com/advice')
            .then(data => data.json())
            .then((adv) => {
                setAdvice(adv)
            })
    }, [])

    const randomHandle = () => {
        console.log('Call API (Click)')
        fetch('https://api.adviceslip.com/advice')
            .then(data => data.json())
            .then((adv) => {
                setAdvice(adv)
            })
    }


    return (
        <div>
            { console.log(`Render ${count++}`, advice) }
            <h1>Xin chao the gioi</h1>
            {advice !== null ? <p>{advice.slip.advice}</p> : <p>Nothing</p>}
            <button
                onClick={randomHandle}>
                Random
            </button>
        </div>
    )
}

export default App

