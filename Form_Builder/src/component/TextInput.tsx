import React from "react";

const TextInput = React.memo(({ label, register }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...register(label)} />
    </div>
  );
});

export default TextInput;
