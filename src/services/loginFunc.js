import axios from "axios";

const loginFunc = async (user, showToast) => {
  try {
    const response = await axios.post("/api/auth/login", user);
    showToast("Logged In", "success");
    return response.data;
  } catch (error) {
    showToast(error.response.data.errors[0], "error");
  }
};

export { loginFunc };
