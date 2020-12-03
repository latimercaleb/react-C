import React from 'react';
class SearchBar extends React.Component{

    state = {term: ''};
    onInputChange(evt){
        this.setState({
            term: evt.target.value
        });
    }

    onFormSubmit(evt){
        evt.preventDefault();
        this.props.onSubmitHandler(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
               <form className="ui form"
                      onSubmit={(evt) => this.onFormSubmit(evt)}>
                   <div className="field">
                       <label>Image Search</label>
                        <input type="text" 
                               onChange={(e) => this.setState({term: e.target.value})} 
                               onClick={(evt) => console.log('Clicked')}
                               value={this.state.term}/>
                   </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;