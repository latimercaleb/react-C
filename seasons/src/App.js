import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Latitude: null,
      Longitude: null,
      ErrorMessage: ''
    };
  }

  componentDidMount(){
    console.log('Mount called: Component displayed');
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          Latitude: position.coords.latitude,
          Longitude: position.coords.longitude
        })
      },
      (err) => this.setState({ErrorMessage: err.code +'- ' + err.message})
    );
  }

  componentDidUpdate(){
    console.log('Update called: Component is re-rendered');
  }

  renderBody(){
    if(this.state.ErrorMessage){
      return( 
        <div>
          <p>Error: {this.state.ErrorMessage}</p>
        </div>
      );
    }
    else if(this.state.Latitude){
      return <SeasonDisplay 
                    latitude={this.state.Latitude} 
                    longitude={this.state.Longitude}/>;
    }
   else{
     return(
      <Loader loadingMessage="Please accept location request..."/>
     );
   }
  }

  render(){
    return (
      <div style={{border: '10px dashed teal'}}> 
        {this.renderBody()}
      </div>
    );
  }
}

export default App;
