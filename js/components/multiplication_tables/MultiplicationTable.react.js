/** @jsx React.DOM */

var React = require('react');
var MultiplicationTableRow = require('./MultiplicationTableRow.react.js');

var MultiplicationTable = React.createClass({

	render: function() {

		var x = this.props.x;
		var y = this.props.y;

		if (x == 0 || y == 0) {
			return null;
		}

		var allRows = [];

		for (var i = 1; i <= x; i++) {
			var id = parseInt(Math.random() * 1000000000000);
			allRows.push(<MultiplicationTableRow key={id} seed={i} multiplier={y} />);
		};

		//will have x and y

		return (
			<table id="multiplicationtable">
				<tbody>
					{allRows}
				</tbody>
			</table>
		);
	}


});	

module.exports = MultiplicationTable;