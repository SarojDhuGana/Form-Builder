import React from "react";

const SelectInput = React.memo(({ label, register }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(label)}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
});

export default SelectInput;
