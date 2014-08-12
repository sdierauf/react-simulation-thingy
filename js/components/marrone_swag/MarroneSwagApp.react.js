/** @jsx React.DOM */

var React = require('react');

var MarroneSwag = require('./MarroneSwag.react');
var MultiplicationTable = require('../multiplication_tables/MultiplicationTableApp.react');

var MarroneSwagApp = React.createClass({

	render: function() {
		
		return(
			<div id="marroneSwagApp">

				<MultiplicationTable />

				<MarroneSwag text={"I AM."} />

				<MarroneSwag text={"SLAY"} />

				<MarroneSwag text={"Double slay"} />

				<MarroneSwag text={"FIERCE."} />
 
				
			</div>
		);
	}
});

module.exports = MarroneSwagApp; 