import React, { Component } from 'react';
import '../styles/Formula.css';

class Formula extends Component {
	render() {
		return (
			<div className="container">
				<div className="title">
					<h3>{this.props.formulaTitle}</h3>
				</div>
				<div className="title">
					<h5>{this.props.formula}</h5>
				</div>
			</div>
		)
	}
}

export default Formula;