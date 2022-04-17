import { createContext, useContext, useReducer } from "react";
import { sortFilterReducer } from "../reducers";

const initialState = {
  sortBy: "",
  filterBy: "",
};

const SortFilterContext = createContext();

const SortFilterProvider = ({ children }) => {
  const [sortFilterState, sortFilterDispatch] = useReducer(
    sortFilterReducer,
    initialState
  );
  return (
    <SortFilterContext.Provider value={{ sortFilterState, sortFilterDispatch }}>
      {children}
    </SortFilterContext.Provider>
  );
};

const useSortFilter = () => useContext(SortFilterContext);

export { SortFilterProvider, useSortFilter };
