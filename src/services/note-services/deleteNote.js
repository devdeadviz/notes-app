import axios from "axios";

const deleteNote = async (notesId, encodedToken, showToast) => {
  try {
    const { data } = await axios.delete(`/api/notes/${notesId}`, {
      headers: { authorization: encodedToken },
    });
    return data.notes;
  } catch (error) {
    showToast(error.response.data, "error");
  }
};

export { deleteNote };
