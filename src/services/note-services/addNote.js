import axios from "axios";

const addNote = async (note, encodedToken) => {
  try {
    const { data } = await axios.post(
      "/api/notes",
      { note },
      { headers: { authorization: encodedToken } }
    );
    return data.notes;
  } catch (error) {
    console.log(error.data);
  }
};

export { addNote };
