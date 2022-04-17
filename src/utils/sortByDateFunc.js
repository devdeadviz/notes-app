const sortByDateFunc = (notes, sortBy) => {
  if (sortBy === "oldest")
    return [...notes].sort((firstDate, secondDate) => {
      const firstObjDate = firstDate.createdAt.toString().split("/");
      const secondObjDate = secondDate.createdAt.toString().split("/");
      return (
        firstObjDate[2] - secondObjDate[2] ||
        firstObjDate[1] - secondObjDate[1] ||
        firstObjDate[0] - secondObjDate[0]
      );
    });
  else if (sortBy === "latest")
    return [...notes].sort((firstDate, secondDate) => {
      const firstObjDate = firstDate.createdAt.toString().split("/");
      const secondObjDate = secondDate.createdAt.toString().split("/");
      return (
        secondObjDate[2] - firstObjDate[2] ||
        secondObjDate[1] - firstObjDate[1] ||
        secondObjDate[0] - firstObjDate[0]
      );
    });
  return notes;
};

export { sortByDateFunc };
