import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

// Root component
class App extends React.Component{

    ytFetchHandler = (searchTerm) => {
        console.log(searchTerm);
    }

    render(){
        return(
            <div className="ui-container">
                <SearchBar ytFetch={this.ytFetchHandler}/>
                Start
            </div>
        );
    }
}

export default App;