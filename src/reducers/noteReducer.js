const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, newNotes: action.payload };
    case "EDIT_NOTE":
      return { ...state, editedNotes: true };
    case "UPDATE_NOTE":
      return { ...state, newNotes: action.payload, editedNotes: false };
    case "TRASH_NOTE":
      return { ...state, trashNotes: [...state.trashNotes, action.payload] };
    case "DELETE_NOTE":
      return { ...state, newNotes: action.payload };
    case "ARCHIVE_AND_UNARCHIVE_NOTE":
      return {
        ...state,
        archiveNotes: action.payload.archives,
        newNotes: action.payload.notes,
      };
    case "DELETE_ARCHIVE_NOTE":
      return { ...state, archiveNotes: action.payload };
    default:
      return state;
  }
};

export { noteReducer };
