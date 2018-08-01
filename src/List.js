import React from 'react';
import ReactStreetview from 'react-streetview';
import ReactTooltip from 'react-tooltip';

                                /*child of the FilterNav component*/
                                /*it displays the list of locations, the input field for search*/
                                /*and the button to toggle the street views above each lit item*/

class List extends React.Component {
    constructor(){
        super()
        this.state = {
            showMe: false,
        };

        this.showMe= this.showMe.bind(this);
    }

    /*show street views when the 'eye-button' is clicked*/
    showMe (){
        this.setState({showMe: !this.state.showMe}) /*tip: try to make it open One view !!*/
    }

    /*allows to open infowindow when a location in the list is clicked*/
    ManageMark(loc) {
        let {google} = this.props
        loc.populateInfoWindow(loc.marker, loc.props.myInfoWindow);
        loc.marker.setAnimation(google.maps.Animation.BOUNCE);
        
    }

    /*add an enter option to click on the list, better for accessibility*/
    ManageKey(e, location) {
        if(e.key === "Enter"){
            e.preventDefault();
            this.ManageMark(location);
        }

    }

   
        
	render() {
		const {myLocations, handleSearch} = this.props
		const googleMapsApiKey = 'AIzaSyBKe2gqMi1-N6TwnYbA0JkJwdOKpulKesU';
        
		return (
			<nav className="list">
      			<div className="filter-opt">
                    <button tabIndex="-1" className="view-btn" onClick={this.showMe} data-tip data-for='tooltip2'>
                        <i className="far fa-eye"></i>
                    </button>
                    <ReactTooltip id='tooltip2' aria-haspopup="true" role="tooltip" place='top' type='dark' className='extraClass' delayHide={800} effect='float' mutliline={true}>
                        <p>Click the button <br/> to show/hide steet views</p>
                    </ReactTooltip>
                    <input 
                        aria-label="Input filter places:"
                        id="search-box" 
                        type="search"  
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Filter by place's name" 
                    />
                </div>
        		<ul>
                    {myLocations.filter(location => location.marker.visible === true).map((location,i) => (
                        <div key={i} >
        			        <li role="button" onClick={(e) => this.ManageMark(location)} onKeyPress={(e)=>this.ManageKey(e, location)} >
                                <h4  tabIndex="0" aria-label={location.props.name}>{location.props.name}</h4>
                                <div id="skip"><a href="#search-box">back to input field</a></div>
                            </li>
                            {this.state.showMe?
                                <div  style={{width: '250px',height: '80px',backgroundColor: '#eeeeee'}}> 
                                    <ReactStreetview
                                        apiKey={googleMapsApiKey}
                                        streetViewPanoramaOptions={
                                            {position:{lat: location.props.position.lat, lng:location.props.position.lng},
                                            pov: {heading: 100, pitch: 0},
                                            zoom: 1}
                                        }
                                    />
                                </div>
                            :null}
                        </div>
                    ))} 
                </ul>
        	</nav>

		)

	}
}

export default List