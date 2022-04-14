import axios from "axios";

const deleteArchiveNote = async (noteId, encodedToken, showToast) => {
  try {
    const { data } = await axios.delete(`/api/archives/delete/${noteId}`, {
      headers: { authorization: encodedToken },
    });
    return data.archives;
  } catch (error) {
    showToast(error.response.data, "error");
  }
};

export { deleteArchiveNote };
