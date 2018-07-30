import React, {Component} from 'react';
import Map from './Map'

 class MapContainer extends Component {
	render() {
		const {google, markerUpdate}=this.props
	return(
			<main role="presentation" aria-label="a map of Toulouse showing points of interest">
				<Map 
					google={google}
					markerUpdate={markerUpdate}
				/>
			</main>
		)
	}
}

export default MapContainer