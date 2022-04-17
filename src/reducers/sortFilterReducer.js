const sortFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.payload };
    case "FILTER_BY_LABELS":
      return { ...state, filterBy: action.payload };
    case "CLEAR_ALL":
      return { ...state, sortBy: "", filterBy: "" };
    default:
      return state;
  }
};

export { sortFilterReducer };
