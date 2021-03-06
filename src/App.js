import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import * as myLatLng from './myLatLng';
import Header from './Header';
import MapContainer from './MapContainer';
import FilterNav from './FilterNav';
import './App.css'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myLocations: [],  
    }

    this.myMarkers = [];
    
    this.markerUpdate= this.markerUpdate.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }

  componentDidMount(){
    window.gm_authFailure = this.gm_authFailure;
}

  /*this function maps over the locations and shows the ones matching the input field */
  handleSearch(query) {
    let result = this.state.myLocations.map(places => {
      let matched = places.props.name.toLowerCase().indexOf(query) >=0;
      if(places.marker){
        places.marker.setVisible(matched);
      }
      return places;
    })
    this.setState({myLocations:result})
  }

  /*function to update markers' array and the state of myLocations*/
  markerUpdate(mk) {
    this.myMarkers.push(mk);
    if(this.myMarkers.length === myLatLng.placesLatLng.length) {
        this.setState({myLocations: this.myMarkers})
      } 
  }

  gm_authFailure(){
    window.alert("Google Maps error!")
}

  
  
  render() {
    return (

      <div className="App">

        <Header/>

        <MapContainer
          google= {this.props.google}
          markerUpdate={this.markerUpdate}    
          myLocations={this.state.myLocations}
        />

        <FilterNav
        handleSearch={this.handleSearch}
        myLocations = {this.state.myLocations}
        google={this.props.google}
        />
        
      </div>

    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBKe2gqMi1-N6TwnYbA0JkJwdOKpulKesU',
})(App)

/*google-maps-react : see https://www.npmjs.com/package/google-maps-react*/