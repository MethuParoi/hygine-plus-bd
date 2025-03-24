import { useState, useEffect, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const SortIndividual = ({ Options, label }) => {
  //   const selectedOptions = useSelector(
  //     (state) => state.sortProduct.selectedOptions
  //   );
  const [expandList, setExpandList] = useState(false);
  const ref = useRef(null);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    dispatch(
      setSelectedOptions(
        selectedOptions.includes(value)
          ? selectedOptions.filter((option) => option !== value)
          : [...selectedOptions, value]
      )
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpandList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="p-4 bg-primary-light">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2
            onClick={() => setExpandList(!expandList)}
            className="text-[1.6rem] lg:text-[1.8rem] font-medium"
          >
            {label}
          </h2>
          <button
            onClick={() => setExpandList(!expandList)}
            className="text-[3rem]"
          >
            <IoIosArrowDropdown />
          </button>
        </div>
        <ul className="mt-2 space-y-2">
          {expandList &&
            Options.map((option) => (
              <li className="text-[1.6rem]" key={option.value}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name={label.toLowerCase()}
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={handleOptionChange}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2 text-gray-700 text-[1.8rem] font-medium">
                    {option.label}
                  </span>
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SortIndividual;
