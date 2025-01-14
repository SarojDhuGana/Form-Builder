import React, { useState } from "react";

interface FormComponentProps {
  type: string;
  label?: string;
}
export const FormComponent: React.FC<FormComponentProps> = React.memo(
  ({ type, label: initialLabel = "Username" }) => {
    const [label, setLabel] = useState(initialLabel);
    const [editableLabel, setEditableLabel] = useState(initialLabel);
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState("");
    const [radioValue, setRadioValue] = useState("");
    const [buttonText, setButtonText] = useState("Submit");

    const handleChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditableLabel(e.target.value);
    };

    const handleSaveLabel = () => {
      setLabel(editableLabel); // Save the label
      setIsEditing(false); // Exit editing mode
    };

    const toggleEditLabel = () => {
      setIsEditing(true); // Enter editing mode
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectValue(e.target.value);
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRadioValue(e.target.value);
    };

    const handleButtonTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setButtonText(e.target.value);
    };
    const renderInput = () => (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editableLabel}
                onChange={handleChangeLabel}
                className="border rounded p-1"
                placeholder="Change label"
                autoFocus
              />
              <button
                onClick={handleSaveLabel}
                className="ml-2 bg-blue-500 text-white p-1 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <span onClick={toggleEditLabel} className="cursor-pointer">
              {label}
            </span>
          )}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="inputField"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={label}
        />
      </div>
    );

    const renderSelect = () => (
      <div className="mb-4">
        <label htmlFor="">Select</label>
        <select
          className="block mt-2 p-2 border rounded w-full"
          value={selectValue}
          onChange={handleSelectChange}
        >
          <option value="">option 1</option>
          <option value="option1">Option 2</option>
          <option value="option2">Option 3</option>
        </select>
      </div>
    );

    const renderRadio = () => (
      <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          choose only one
        </label>
        <label className="px-2">
          <input
            type="radio"
            name="radioGroup"
            value="yes"
            checked={radioValue === "yes"}
            onChange={handleRadioChange}
          />
          yes
        </label>
        <br />
        <label className="px-2">
          <input
            type="radio"
            name="radioGroup"
            value="no"
            checked={radioValue === "no"}
            onChange={handleRadioChange}
          />
          No
        </label>
      </div>
    );

    const renderButton = () => (
      <div className="mt-4">
        <button className="p-2 border rounded">{buttonText}</button>
      </div>
    );

    switch (type) {
      case "text":
        return renderInput();
      case "select":
        return renderSelect();
      case "radio":
        return renderRadio();
      case "button":
        return renderButton();
      default:
        return null;
    }
  }
);
