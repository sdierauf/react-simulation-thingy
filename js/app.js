/** @jsx React.DOM */

var React = require('react');

var InfectionBoard = require('./components/InfectionBoard.react');

React.renderComponent(
	<InfectionBoard />,
	document.getElementById('samples')
);

