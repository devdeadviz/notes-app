import axios from "axios";

const signupFunc = async (user) => {
  try {
    const response = await axios.post("/api/auth/signup", user);
    return response.data;
  } catch (error) {
    console.error(error.response.data);
  }
};

export { signupFunc };
