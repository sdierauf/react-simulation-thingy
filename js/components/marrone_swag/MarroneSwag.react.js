/** @jsx React.DOM */

var React = require('react');

var MarroneSwag = React.createClass({

	

	render: function() {

		//var marroneImg = "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10464367_10103190262315648_6313040559157317098_n.jpg?oh=de2d5efb95a0c46286b7ff724dc51eac&oe=544EB355&__gda__=1414487082_a1732c28cc4c1be36eb49f34229e8c7e";
		var marroneImg = "http://i.imgur.com/K0sD3G8.jpg";


		var text = this.props.text;
		var swagStyle = {
			color: 'white',
			backgroundImage: 'url(' + marroneImg + ')',
			backgroundSize: 'cover',
			width: '384px',
			//height: '384px',
			height: '512px',
			textAlign: 'center',
			verticalAlign: 'bottom',
			margin: '10px',
			WebkitTextStroke: '3px black'
		};

		var textStyle = {
			fontSize: '50pt',
			fontFamily: 'Impact, sans-serif',
			margin: '0px'	
		}

		return (
			<div style={swagStyle}>
				<h1 style={textStyle}>{text}</h1>
			</div>
		);
	}


});

module.exports = MarroneSwag; 