import React from "react";
import { useDrag } from "react-dnd";

const ComponentBox: React.FC<{ type: string }> = ({ type }) => {
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
        backgroundColor: "#f4f4f4",
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
  <div
    style={{
      width: "200px",
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
    }}
  >
    <h3>Component Library</h3>
    <ComponentBox type="text" />
    <ComponentBox type="select" />
    <ComponentBox type="radio" />
  </div>
);
