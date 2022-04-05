const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, newNotes: action.payload };
    default:
      return state;
  }
};

export { noteReducer };
