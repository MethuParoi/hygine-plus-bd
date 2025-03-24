const SortButton = ({ label, options }) => {
  return (
    <div className="filter">
      {/* {options?.map((option, index) => (
        <input
          key={index}
          className="btn filter-reset"
          type="radio"
          name="metaframeworks"
          aria-label={option || "All"}
        />
      ))} */}
    </div>
  );
};

export default SortButton;
