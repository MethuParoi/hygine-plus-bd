import { RiArrowRightSLine } from "react-icons/ri";

const SortButton = ({ options, isSelected, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        name="sortCategory"
        aria-label={options.value}
        value={options.value}
        id={`sort-${options.value}`} // Ensure unique ID
        className="hidden peer"
        checked={isSelected} // Bind the selected state
        onChange={() => onChange(options.value)} // Trigger onChange when selected
      />
      <label
        htmlFor={`sort-${options.value}`} // Match the unique ID
        className="text-gray-600 text-lg md:text-2xl font-medium py-2 px-4 rounded-[.5rem] lg:rounded-none cursor-pointer bg-white border border-gray-300 flex items-center justify-center lg:justify-between gap-x-5 hover:bg-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.2)] md:w-72 peer-checked:bg-gray-300  peer-checked:text-gray-800 peer-checked:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      >
        {options.label}
        <RiArrowRightSLine className="text-4xl text-gray-600 hidden lg:block" />
      </label>
    </div>
  );
};

export default SortButton;
