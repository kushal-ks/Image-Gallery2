import React, { Component } from 'react';
export class Img extends Component {
	render() {
		return (
		
			<img  className="img-thumbnail card-img-top" src={this.props.src} style={{ height: this.props.height, width: this.props.width }} />
	
		)
	}
}