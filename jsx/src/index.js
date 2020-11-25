import React from 'react';
import ReactDOM from 'react-dom';

function renderParagraphText(){
    return 'Text from a function invocation';
}

const App = () => {
    const buttonText = 'Submit Value';
    return <div>
        <label className='label' htmlFor='name'>Enter Name: </label>
        <input id='name' type='text'/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        <hr />
        <p>{renderParagraphText()}</p>
    </div>;
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);