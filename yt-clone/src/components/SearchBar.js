import React from 'react';
class SearchBar extends React.Component{

    state = {term: ''};

    onInputChange(evt){
        this.setState({
            term: evt.target.value
        });
    }

    onFormSubmit= (evt) => {
        evt.preventDefault();
         this.props.ytFetch(this.state.term);
    }

    onChangeHandler = (event) => {
        this.setState({term: event.target.value});
    }


    render(){
        return (
            <div className="ui segment search-bar">
               <form className="ui form"
                      onSubmit={this.onFormSubmit}>
                   <div className="field">
                       <label>Find A Video</label>
                        <input type="text" 
                               onChange={this.onChangeHandler}
                               value={this.state.term}/>
                   </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;