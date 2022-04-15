import { createContext, useContext, useReducer } from "react";
import { noteReducer } from "../reducers";

const initialNoteState = {
  newNotes: [],
  editedNotes: false,
  trashNotes: [],
  archiveNotes: [],
  noteColor: ""
};

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, initialNoteState);

  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
