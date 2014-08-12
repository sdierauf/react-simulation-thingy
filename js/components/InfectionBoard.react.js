/** @jsx React.DOM */

var React = require('react');
var ReactBoard = require('./ReactBoard.react');

var InfectionBoard = React.createClass({

    getInitialState: function() {
        return {
            dataArray : [[1, 2], [3, 4]]
        };
    },

    render: function() {
        return (
            <div id="infection-board">
                <ReactBoard
                    boardData={this.state.dataArray} />
            </div>
        );
    }


});

module.exports = InfectionBoard;

