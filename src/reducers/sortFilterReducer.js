const sortFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export { sortFilterReducer };
