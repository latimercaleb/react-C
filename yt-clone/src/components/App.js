import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

// Root component
class App extends React.Component{

    render(){
        return(
            <div className="ui-container">
                <SearchBar />
                Start
            </div>
        );
    }
}

export default App;