import React, { Component } from 'react';
import '../styles/CenterSection.css';

class Resistance extends Component {
	state = {
		resistance: '',
		current: '',
		voltage: ''
	}

	handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === 'voltage') {
			this.setState({voltage: value});
		} else if (name === 'current') {
			this.setState({current: value});
		}

		e.preventDefault();
	}

	handleCompute = (e) => {
		const v = this.state.voltage;
		const i = this.state.current;
		let r = 0.0;

		if (v === '') {
			this.setState({
				voltage: '',
				current: '',
				resistance: ''
			});
		} else if (i === '') {
			this.setState({
				voltage: '',
				current: '',
				resistance: ''
			});
		} else {
			r += parseFloat(v) / parseFloat(i);
			this.setState({
				resistance: r+'R',
				voltage: '',
				current: ''
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
							<h1>Resistance</h1>
						</div>
						<div className="Inputs">
							<label>Voltage(V)</label>
							<input
								className="input"
								type="number"
								name="voltage"
								placeholder="0.0"
								value={this.state.voltage}
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
								name="resistance"
								placeholder="0.0R"
								readonly="true"
								value={this.state.resistance}
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

export default Resistance;