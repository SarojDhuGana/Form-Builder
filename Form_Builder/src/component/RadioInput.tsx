import React from "react";

const RadioInput = React.memo(({ label, register }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <label>
          <input type="radio" value="yes" {...register(label)} />
          Yes
        </label>
        <label>
          <input type="radio" value="no" {...register(label)} />
          No
        </label>
      </div>
    </div>
  );
});

export default RadioInput;
