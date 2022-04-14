import axios from "axios";

const deleteArchiveNote = async (noteId, encodedToken) => {
  try {
    const { data } = await axios.delete(`/api/archives/delete/${noteId}`, {
      headers: { authorization: encodedToken },
    });
    return data.archives;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { deleteArchiveNote };
