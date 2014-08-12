/** @jsx React.DOM */

var React = require('react');


var MultiplicationTableRow = React.createClass({

	render: function() {

		var allTds = [];

		var seed = this.props.seed;
		var multiplier = this.props.multiplier;

		for (var i = 1; i <= multiplier; i++) {
			allTds.push(<td> {seed * i} </td>);
		}

		return(
			<tr>{allTds}</tr>
		);
	}
});

module.exports = MultiplicationTableRow;