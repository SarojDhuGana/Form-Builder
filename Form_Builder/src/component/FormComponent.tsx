import React from "react";

interface FormComponentProps {
  type: string;
}

export const FormComponent: React.FC<FormComponentProps> = React.memo(
  ({ type }) => {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            placeholder="Enter text"
            style={{ display: "block", margin: "10px 0" }}
          />
        );
      case "select":
        return (
          <select style={{ display: "block", margin: "10px 0" }}>
            <option value="">Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        );
      case "radio":
        return (
          <div style={{ margin: "10px 0" }}>
            <label>
              <input type="radio" name="radio" value="option1" /> Option 1
            </label>
            <br />
            <label>
              <input type="radio" name="radio" value="option2" /> Option 2
            </label>
          </div>
        );
      default:
        return null;
    }
  }
);
