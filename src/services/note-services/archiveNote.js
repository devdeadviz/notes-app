import axios from "axios";

const archiveNote = async (note, encodedToken) => {
  try {
    const { data } = await axios.post(`/api/notes/archives/${note._id}`, note, {
      headers: { authorization: encodedToken },
    });
    return data;
  } catch (error) {
    console.error(error.data);
  }
};

export { archiveNote };
