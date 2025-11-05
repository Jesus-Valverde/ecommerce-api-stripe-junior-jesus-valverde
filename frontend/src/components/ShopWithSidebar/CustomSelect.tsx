import React, { useState, useEffect, useRef } from "react";

const CustomSelect = ({ options = [], placeholder = "Seleccionar", onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option.value); // avisa al padre
  };

  return (
    <div
      className="custom-select custom-select-2 flex-shrink-0 relative w-full"
      ref={selectRef}
    >
      <div
        className={`select-selected whitespace-nowrap cursor-pointer ${
          isOpen ? "select-arrow-active" : ""
        }`}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>

      {/* Lista desplegable */}
      {isOpen && options.length > 0 && (
        <div className="select-items absolute left-0 top-full z-10 w-full bg-white border border-gray-200 shadow-md max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                selectedOption?.value === option.value ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
