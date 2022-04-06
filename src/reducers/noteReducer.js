const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, newNotes: action.payload };
    case "EDIT_NOTE":
      return { ...state, editedNotes: true };
    case "UPDATE_NOTE":
      return { ...state, newNotes: action.payload, editedNotes: false };
    default:
      return state;
  }
};

export { noteReducer };
