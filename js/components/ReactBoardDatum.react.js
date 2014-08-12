/** @jsx React.DOM */

var React = require('react');

var ReactBoardDatum = React.createClass({


    render: function() {
        var data = this.props.myData;
        return (
            <td>
                {data}
            </td>
        );
    }
});

module.exports = ReactBoardDatum;

