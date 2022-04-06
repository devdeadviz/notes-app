import axios from "axios";

const editNote = async (notesId, note, encodedToken) => {
  try {
    const { data } = await axios.post(
      `/api/notes/${notesId}`,
      { note },
      {
        headers: { authorization: encodedToken },
      }
    );
    return data.notes;
  } catch (error) {
    console.log(error.data);
  }
};

export { editNote };
