import axios from "axios";

const editNote = async (notesId, note, encodedToken, showToast) => {
  try {
    const { data } = await axios.post(
      `/api/notes/${notesId}`,
      { note },
      {
        headers: { authorization: encodedToken },
      }
    );
    showToast("Note Edited!", "success");
    return data.notes;
  } catch (error) {
    showToast(error.response.data, "error");
  }
};

export { editNote };
