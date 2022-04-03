const signupReducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "LAST_NAME":
      return { ...state, lastName: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "CLEAR":
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    default:
      return state;
  }
};

export { signupReducer };
