import axios from "axios";

const deleteNote = async (notesId, encodedToken) => {
  try {
    const { data } = await axios.delete(`/api/notes/${notesId}`, {
      headers: { authorization: encodedToken },
    });
    return data.notes;
  } catch (error) {
    console.error(error.data);
  }
};

export { deleteNote };
