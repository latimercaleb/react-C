import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './Search';
import ImageList from './ImageList';

class App extends React.Component  {
  state= {images: []};
  onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get('search/photos', {
      params: { query: searchTerm} 
    });

    console.log(response);

    this.setState({
      images: response.data.results
    });
  }

  render(){ 
    return (
      <div className="App">
        <SearchBar onSubmitHandler={this.onSearchSubmit}/>
        Retrieved: {this.state.images.length} of images
        <hr/>
        <ImageList images={this.state.images}/> 
      </div>
    );
  }
} 

export default App;
