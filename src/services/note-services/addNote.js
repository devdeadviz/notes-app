import axios from "axios";

const addNote = async (note, encodedToken, showToast) => {
  try {
    const { data } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: { authorization: encodedToken },
      }
    );
    showToast("Note Added!", "success");
    return data.notes;
  } catch (error) {
    showToast(error.data.errors[0], "error");
  }
};

export { addNote };
