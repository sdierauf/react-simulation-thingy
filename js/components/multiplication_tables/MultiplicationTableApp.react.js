/** @jsx React.DOM */

var React = require('react');
var MultiplicationTable = require('./MultiplicationTable.react');


var MultiplicationTableApp = React.createClass( {

	getInitialState: function() {
		return {
			x: 5,
			y: 5
		}
	},

	render: function() {

		return (
			<div id="multiplicationtableapp">
				<h1>Multiplication Table!!</h1>
				<input
					id="x"
					type="text" 
					value={this.state.x}
					onChange={this._onChangeX}/>

				<input
					id="y"
					type="text" 
					value={this.state.y}
					onChange={this._onChangeY}/>

				<MultiplicationTable 
					x={this.state.x}
					y={this.state.y} />
			</div>
		);
	},

	_onChangeX: function(event) {
		this.setState({
			x: event.target.value
		});
	},

	_onChangeY: function(event) {
		this.setState({
			y: event.target.value
		});
	}

});

module.exports = MultiplicationTableApp;