import React, { Component } from 'react';

class Current extends Component {
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
		} else if (name === 'resistance') {
			this.setState({resistance: value});
		}

		e.preventDefault();
	}

	handleCompute = (e) => {
		const v = this.state.voltage;
		const r = this.state.resistance;
		let i = 0.0;

		if (v === '') {
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
			i += parseFloat(v) / parseFloat(r);
			this.setState({
				current: i+'A',
				voltage: '',
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
							<h1>Current</h1>
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
							<label>Resistance(R)</label>
							<input
								className="input"
								type="number"
								name="resistance"
								placeholder="0.0"
								value={this.state.resistance}
							/>
						</div>
						<div className="InputsAnswer">
							<input
								className="inputAnswer"
								type="text"
								name="current"
								placeholder="0.0A"
								readonly="true"
								value={this.state.current}
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

export default Current;