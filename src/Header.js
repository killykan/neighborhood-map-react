import React from 'react';
import logo from './logo.svg';

const Header = () => {
	
		return(
			<header tabIndex="0" role="banner" className="App-header">
          		<img src={logo} className="App-logo" alt="logo" />
          		<h1 className="App-title">My Neighborhood Map</h1>
          		<img src={logo} className="App-logo" alt="logo" />
          		<div id="skip"><a href="#list-btn">Skip to filter button</a></div> {/*for accessibility*/}
        	</header>

		)
	
}

export default Header