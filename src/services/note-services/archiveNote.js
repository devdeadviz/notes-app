import axios from "axios";

const archiveNote = async (noteId, encodedToken) => {
  try {
    const { data } = await axios.post(`/api/notes/archives/${noteId}`, {
      headers: { authorization: encodedToken },
    });
    return data.notes;
  } catch (error) {
    console.error(error.data);
  }
};

export { archiveNote };
