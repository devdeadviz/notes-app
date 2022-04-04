import axios from "axios";

const loginFunc = async (user) => {
  try {
    const response = await axios.post("/api/auth/login", user);
    return response.data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { loginFunc };
