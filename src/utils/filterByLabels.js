const filterByLabels = (notes, filterBy) => {
  if (filterBy) return notes.filter((note) => note.labels === filterBy);
  return notes;
};

export { filterByLabels };
