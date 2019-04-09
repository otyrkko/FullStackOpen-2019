import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, {props.age}v (noin)</p>
        </div>
    )
}

const App = () => {
    const nimi = "Jussi"
    const ika = 10
    return (    
        <>
            <h1>Greetings</h1>
            <Hello name={nimi} age={ika + 5}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
