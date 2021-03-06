import React, { Component } from 'react'
import '../Stylesheets/home.scss';

class ProgressBarExample extends Component {
	
	render() {

        let divStyle

		if(this.props.percentage>0){
		 	divStyle = {
            	width: `${this.props.percentage}%`,
            	backgroundColor: `${this.props.mountain}`,  // Detta funkar inte, men är en bit på vägen
        	};
   		 }
   		 else{
	     	divStyle = {
	            width: 0,
	        };
    	}
		return(
				<div className="progress_bar">
					<div className="filler" style={divStyle} />
				</div>
		)
	}
}

export default ProgressBarExample