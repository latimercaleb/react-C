import React from 'react';
class SearchBar extends React.Component{

    state = {term: ''};
    onInputChange(evt){
        console.log(evt.target.value);
        console.log('Running input handler');
        this.setState({
            term: evt.target.value
        });
    }


    render(){
        return (
            // Install semantic for this app
            <div className="ui segment">
               <form className="ui form">
                   <div className="field">
                       <label>Image Search</label>
                        <input type="text" 
                                onChange={(e) => this.setState({term: e.target.value})} 
                                onClick={(evt) => console.log(evt)}
                                value={this.state.term}/>
                   </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;