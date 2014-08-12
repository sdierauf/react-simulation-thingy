/** @jsx React.DOM */

var React = require('react');
var ReactBoardRow = require('./ReactBoardRow.react');

var ReactBoard = React.createClass({



    render: function() {

        var allRows = [];
        var data = this.props.boardData;

        for (var i = 0; i < data.length; i++) {
            var id = Math.floor(Math.random()*10000000);
            allRows.push(<ReactBoardRow key={id} rowData={data[i]} />);
        };

        return (
            <table className="board">
                <tbody>
                    {allRows}
                </tbody>
            </table>
        );
    }

});

module.exports = ReactBoard;