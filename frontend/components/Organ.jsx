var React = require('react');
var Key = require('./Key');
var KeyMap = require('../constants/KeyMap');
var Recorder = require("./Recorder");

var Organ = React.createClass({

  render: function() {
    var keys = KeyMap.order.map(function (key) {
      return (
        <Key noteName={KeyMap[key]} key={key}/>
      );
    });

    return (
      <div>
        <Recorder/>
        {keys}
      </div>
    );
  }

});

module.exports = Organ;
