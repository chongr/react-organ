var Track = require('../util/Track');
var React = require('react');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function() {
    return {
      isRecording: false,
      track: new Track({name: "1"})
    };
  },

  componentDidMount: function () {
    KeyStore.addListener(this.recordNotes);
  },

  recordNotes: function () {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.allNotes());
    }
  },

  clickHandler: function () {
    var isRecording = this.state.isRecording;
    if (isRecording) {
      this.state.track.stopRecording();
      console.log(this.state.track);
    }
    else {
      this.state.track.startRecording();
    }

    this.setState({isRecording: !isRecording});
  },

  render: function() {
    var buttonText = this.state.isRecording ? "stop" : "start";
    return (
      <div>
        <button onClick={this.clickHandler}>{buttonText}</button>
        <button onClick={this.playTrack}>Play Track</button>
      </div>
    );
  }

});

module.exports = Recorder;
