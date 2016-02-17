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
  }
};

module.exports = keyActions;
