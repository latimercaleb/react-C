import React from 'react';

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

  render(){
    if(this.state.ErrorMessage){
      return( 
        <div>
          <p>Error: {this.state.ErrorMessage}</p>
        </div>
      );
    }
    else if(this.state.Latitude){
      return(
        <div>
          <p>Latitude: {this.state.Latitude} </p>
          <p>Longitude: {this.state.Longitude} </p>
        </div>
      );
    }
   else{
     return(
       <div>
         Loading...
       </div>
     );
   }
  }
}

export default App;
