import React, { Component } from 'react';
import '../styles/CenterSection.css';

class Voltage extends Component {
	state = {
		resistance: '',
		current: '',
		voltage: ''
	}

	handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === 'resistance') {
			this.setState({resistance: value});
		} else if (name === 'current') {
			this.setState({current: value});
		}

		e.preventDefault();
	}

	handleCompute = (e) => {
		const i = this.state.current;
		const r = this.state.resistance;
		let v = 0.0;

		if (i === '') {
			this.setState({
				voltage: '',
				current: '',
				resistance: ''
			});
		} else if (r === '') {
			this.setState({
				voltage: '',
				current: '',
				resistance: ''
			});
		} else {
			v += parseFloat(i) * parseFloat(r);
			this.setState({
				voltage: v+'V',
				current: '',
				resistance: ''
			});
		}

		e.preventDefault();
	}

	handleClear = (e) => {
		this.setState({
			resistance: '',
			current: '',
			voltage: ''
	});

		e.preventDefault();
	}

	render() {
		return (
			<div className="OuterContainer">
				<form onSubmit={this.handleCompute} onChange={this.handleOnChange}>
					<div className="InnerContainer">
						<div className="Title">
							<h1>Voltage</h1>
						</div>
						<div className="Inputs">
							<label>Resistance(R)</label>
							<input
								className="input"
								type="number"
								name="resistance"
								placeholder="0.0"
								value={this.state.resistance}
							/>
						</div>
						   <div className="Inputs">
							<label>Current(I)</label>
							<input
								className="input"
								type="number"
								name="current"
								placeholder="0.0"
								value={this.state.current}
							/>
						</div>
						<div className="InputsAnswer">
							<input
								className="inputAnswer"
								type="text"
								name="voltage"
								placeholder="0.0V"
								readonly="true"
								value={this.state.voltage}
							/>
						</div>
						<input
								className="btn"
								type="submit"
								name="compute"
								value="Compute"
							/>
						<button
							className="btn-clear"
							onClick={this.handleClear}
						>
						Clear
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Voltage;