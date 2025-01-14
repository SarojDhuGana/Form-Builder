import React from "react";
import { useDrag } from "react-dnd";

const ComponentBox: React.FC<{ type: string; label: string }> = ({ type }) => {
  const [, dragRef] = useDrag(() => ({
    type: "FORM_COMPONENT",
    item: { type },
  }));

  return (
    <div
      ref={dragRef}
      style={{
        padding: "10px",
        margin: "10px 0",
        backgroundColor: "red",
        color: "white",
        textTransform: "capitalize",
        borderRadius: "4px",
        cursor: "grab",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {type}
    </div>
  );
};

export const ComponentLibrary: React.FC = () => (
  <div className=" w-[250px] p-5 rounded-md border-2 border-pink-200 shadow-lg shadow-pink-500  h-[96]">
    <h3 className="text-2xl text-gray-200">Form Component</h3>
    <ComponentBox type="text" label="Username" />
    <ComponentBox type="select" label="Choose an option" />
    <ComponentBox type="radio" label="Select an option" />
    <ComponentBox type="button" label="Submit" />
  </div>
);
