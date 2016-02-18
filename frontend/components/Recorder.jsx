var Track = require('../util/Track');
var React = require('react');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function() {
    return {
      isRecording: false,
      track: new Track({name: "1"}),
      isPlaying: false
    };
  },

  componentDidMount: function () {
    KeyStore.addListener(this.recordNotes);
    KeyStore.addListener(this.checkPlayBackStatus);
  },

  checkPlayBackStatus: function () {
    this.setState({isPlaying: KeyStore.getPlayBackStatus()});
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

  playbackHandler: function () {
    var isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.track.stop();
    } else {
      this.state.track.play();
    }
  },

  render: function() {
    var buttonText = this.state.isRecording ? "stop" : "start";
    var playButtonText = this.state.isPlaying ? "stop track" : "play track";
    return (
      <div>
        <button onClick={this.clickHandler}>{buttonText}</button>
        <button onClick={this.playbackHandler}>{playButtonText}</button>
      </div>
    );
  }

});

module.exports = Recorder;
