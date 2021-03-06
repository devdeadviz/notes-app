const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, newNotes: action.payload, noteColor: "" };
    case "EDIT_NOTE":
      return { ...state, editedNotes: true };
    case "UPDATE_NOTE":
      return {
        ...state,
        newNotes: action.payload,
        editedNotes: false,
        noteColor: "",
      };
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
    case "DELETE_FOREVER":
      return { ...state, trashNotes: action.payload };
    case "NOTE_COLOR":
      return { ...state, noteColor: action.payload };
    case "ADD_LABELS_TO_LIST":
      return { ...state, labelsList: [...state.labelsList, action.payload] };
    case "ADD_LABEL":
      return { ...state, labels: action.payload };
    case "CLEAR_LABEL":
      return { ...state, labels: "" };
    case "CLEAR_NOTE_COLOR":
      return { ...state, noteColor: "" };
    case "DELETE_LABEL_FROM_LIST":
      return { ...state, labelsList: action.payload };
    default:
      return state;
  }
};

export { noteReducer };
