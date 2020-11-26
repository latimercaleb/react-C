import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Latitude: null,
      Longitude: null
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          Latitude: position.coords.latitude,
          Longitude: position.coords.longitude
        })
      },
      (err) => console.log(err)
    );
  }

  render(){
    return( 
      <div>
        <p>Latitude: {this.state.Latitude} </p>
        <p>Longitude: {this.state.Longitude} </p>
      </div>
    );
  }
}

export default App;
