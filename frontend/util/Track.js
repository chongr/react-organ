var KeyStore = require('../stores/KeyStore');

var ctx = new AudioContext();

function Track(attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll || [];
}

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = ctx.currentTime;
};

Track.prototype.addNotes = function (notes) {
  var noteEvent = {
    timeSlice: ctx.currentTime - this.startTime,
    notes: notes
  };
  this.roll.push(noteEvent);
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

module.exports = Track;
