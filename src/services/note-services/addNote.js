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
    return data.notes;
  } catch (error) {
    showToast(error.response.data, "error");
  }
};

export { addNote };
