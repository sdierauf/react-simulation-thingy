/** @jsx React.DOM */

var React = require('react');

//Custom Elements
var MultiplicationTableApp = require('./multiplication_tables/MultiplicationTableApp.react.js');
var MarroneSwagApp = require('./marrone_swag/MarroneSwagApp.react.js');




var SampleComponents = React.createClass({

	render: function() {

		return(
			<div id="sampleComponents">
				<MultiplicationTableApp />
				<MarroneSwagApp />
			</div>
		);
	}


});

module.exports = SampleComponents;