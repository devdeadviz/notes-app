import axios from "axios";

const restoreArchiveNote = async (noteId, encodedToken) => {
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
    console.error(error.data);
  }
};

export { restoreArchiveNote };
