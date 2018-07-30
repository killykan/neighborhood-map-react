import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyMarkers from './MyMarkers';
import mapStyles from './mapStyles';
import * as myLatLng from './myLatLng'

class Map extends Component{

	componentDidMount(){
		this.mapInit();
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.google !== this.props.google){
			this.mapInit();
		}
	}

	mapInit() {

		if(this.props && this.props.google){
			const {google} = this.props;
			const maps = google.maps;
			const mapRef = this.refs.map;
			const mapNode = ReactDOM.findDOMNode(mapRef);
			const mapCoor = {lat: 43.604557, lng: 1.443589};
			const {lat, lng} = mapCoor;
			const mapObj = Object.assign({}, {
				center: new maps.LatLng(lat, lng),
				zoom: mapStyles.zoom,
				styles: mapStyles.styles,
				mapTypesControl: mapStyles.mapTypesControl
			})

			this.map = new maps.Map(mapNode, mapObj);
			this.bounds = new google.maps.LatLngBounds();
			this.myInfoWindow = new google.maps.InfoWindow();
			this.forceUpdate();
			
			maps.event.addDomListener(window, "resize", function() {
    			maps.event.trigger(this.map, "resize");
    		});

		} else {
			alert('Can not access Google Maps Api right now!')
		}
	}

	render() {

		const style = {
			width: '100vw',
			height: '100vh'
		};	

		const {markerUpdate} = this.props;
		

		return (
			<div ref='map' style={style}>
				Loading Map...
				{myLatLng.placesLatLng.map((place,i) => (
					
					<MyMarkers key={i}
						google={this.props.google}
						map={this.map}
						name={place.name}
						position={place.location}
						myInfoWindow={this.myInfoWindow}
						bounds={this.bounds}
						markerUpdate={markerUpdate}

					/>
				))}
			</div>

		)
	}
}

export default Map


