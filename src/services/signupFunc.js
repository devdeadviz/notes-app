import axios from "axios";

const signupFunc = async (user, showToast) => {
  try {
    const response = await axios.post("/api/auth/signup", user);
    showToast("Account Created and Logged In", "success");
    return response.data;
  } catch (error) {
    showToast(error.response.data.errors[0], "error");
  }
};

export { signupFunc };
