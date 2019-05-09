import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/layout/Header';
import Voltage from './components/Voltage';
import Resistance from './components/Resistance';
import Current from './components/Current';
import Formula from './components/Formula';

class App extends Component {
	state = {
		calculation:'voltage',
		component: <Voltage />,
		formulaTitle: 'Voltage Formula',
		formula: 'V = I(R)'
	}

	chooseCalculation = (e) => {
		this.setState({calculation: e.target.value});
		if (e.target.value === 'voltage') {
			this.setState({
				component: <Voltage />,
				formulaTitle: 'Voltage Formula',
				formula: 'V = I(R)'
			});
		} else if (e.target.value === 'resistance') {
			this.setState({component: <Resistance />,
				formulaTitle: 'Resistance Formula',
				formula: 'R = V/I'});
		} else if (e.target.value === 'current') {
			this.setState({component: <Current />,
				formulaTitle: 'Current Formula',
				formula: 'I = V/R'});
		}
		e.preventDefault();
	}

  render() {
    return (
      <div className="App">
      	<Header />
      	<div className="Container">
      		<div className="DropDown">
      			<div className="options">
	      			<select onChange={ this.chooseCalculation } value={this.state.calculation}>
		      			<option value="voltage">Voltage</option>
		      			<option value="resistance">Resistance</option>
		      			<option value="current">Current</option>
	      			</select>
      			</div>
      			<div className="infoContainer">
      				<div className="title">
      					<h4>Info</h4>
      				</div>
      				<div className="info">
      					<p>&nbsp;&nbsp;A simple Ohms law calculator using the ohms law formula.<br /><br /><br />&nbsp;&nbsp;If you have more suggestions to 
      					improve this app, just contact joshmatthewtalplacido@gmail.com</p>
      				</div>
      			</div>
      		</div>
      		<div className="CenterSection">
      			{this.state.component}
      		</div>
      		<div className="RightSideSection">
      			<Formula formulaTitle={this.state.formulaTitle} formula={this.state.formula} />
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;
