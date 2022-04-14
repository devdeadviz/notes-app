import axios from "axios";

const restoreArchiveNote = async (noteId, encodedToken, showToast) => {
  try {
    const { data } = await axios.post(
      `/api/archives/restore/${noteId}`,
      {},
      {
        headers: { authorization: encodedToken },
      }
    );
    return data;
  } catch (error) {
    showToast(error.response.data, "error");
  }
};

export { restoreArchiveNote };
