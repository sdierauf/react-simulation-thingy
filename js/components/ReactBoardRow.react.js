/** @jsx React.DOM */

var React = require('react');
var ReactBoardDatum = require('./ReactBoardDatum.react');

var ReactBoardRow = React.createClass({


    render: function() {

        var data = this.props.rowData;
        var allDatums = [];

        for (var i = 0; i < data.length; i++) {
            allDatums.push(<ReactBoardDatum key={Math.random() * 1000000} myData={data[i]} />);
        }

        return( 
            <tr>
                {allDatums}
            </tr>
        );
    }
});

module.exports = ReactBoardRow;