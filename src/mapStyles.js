/*customize map style*/
/*styles provided by snazzymaps.com, by author Min*/

const mapStyles = {
	zoom: 15,
	mapTypeControl: false,
	styles: [
	    {
	        "featureType": "landscape.natural",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#e0efef"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "hue": "#1900ff"
	            },
	            {
	                "color": "#c0e8e8"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "lightness": 100
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.line",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": 700
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#7dcdcd"
	            }
	        ]
	    }
	]

}

export default mapStyles