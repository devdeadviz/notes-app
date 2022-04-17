const sortFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.payload };
    case "FILTER_BY_LABELS":
      return { ...state, filterBy: action.payload };
    default:
      return state;
  }
};

export { sortFilterReducer };
