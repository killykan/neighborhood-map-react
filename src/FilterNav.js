import React from 'react';
import List from './List';
import ReactTooltip from 'react-tooltip';


	

class FilterNav extends React.Component {
	constructor () {
		super()

		this.state = {
    		isHidden: true,
    };
  	
	}
	
	toggleList (){
  		this.setState({isHidden: !this.state.isHidden})
	}

  	render() {
    	
  		
    	const { handleSearch, myLocations, google} = this.props
    	const {isHidden} = this.state
    	

    	return (
      		<nav className='nav-filters'>
        		<header className="nav-header">
        			<button tabIndex="0" aria-label="open the filter menu" id="list-btn" onClick={this.toggleList.bind(this)} data-tip data-for='tooltip' >filters</button>
              <ReactTooltip id='tooltip' aria-haspopup="true" role="tooltip" place='top' type='dark' className='extraClass' delayHide={800} effect='float' mutliline={true}>
                        <p>Click the button <br/> to filter the markers</p>
                    </ReactTooltip>
        			{!this.state.isHidden && <List isHidden={isHidden} myLocations={myLocations} handleSearch={handleSearch} google={google}  />}
        		</header>
          </nav>
        	
   		);
 	  } 
  }




export default FilterNav;