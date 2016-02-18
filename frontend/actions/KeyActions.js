var Dispatcher = require("../dispatcher/Dispatcher");

var keyActions = {
  addNote: function (noteName) {
    Dispatcher.dispatch({
      actionType: "ADD_NOTE",
      noteName: noteName
    });
  },

  removeNote: function (noteName) {
    Dispatcher.dispatch({
      actionType: "REMOVE_NOTE",
      noteName: noteName
    });
  },

  removeAllNotes: function () {
    Dispatcher.dispatch({
      actionType: "REMOVE_ALL_NOTES"
    });
  },

  startPlaying: function () {
    Dispatcher.dispatch({
      actionType: "START_PLAYBACK"
    });
  },

  stopPlaying: function () {
    Dispatcher.dispatch({
      actionType: "STOP_PLAYBACK"
    });
  }
};

module.exports = keyActions;
