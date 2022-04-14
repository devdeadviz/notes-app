import axios from "axios";

const archiveNote = async (note, encodedToken, showToast) => {
  try {
    const { data } = await axios.post(`/api/notes/archives/${note._id}`, note, {
      headers: { authorization: encodedToken },
    });
    return data;
  } catch (error) {
    showToast(error.response.data);
  }
};

export { archiveNote };
