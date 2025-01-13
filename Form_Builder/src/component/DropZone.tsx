import React from "react";
import { useDrop } from "react-dnd";
import { FormComponent } from "./FormComponent";

interface DropZoneProps {
  onDrop: (type: string) => void;
  components: string[];
}

export const DropZone: React.FC<DropZoneProps> = ({ onDrop, components }) => {
  const [, dropRef] = useDrop(() => ({
    accept: "FORM_COMPONENT",
    drop: (item: { type: string }) => onDrop(item.type),
  }));

  return (
    <div ref={dropRef} style={{ minHeight: "300px" }}>
      {components.length === 0 ? (
        <p style={{ color: "#999", textAlign: "center" }}>
          Drag components here
        </p>
      ) : (
        components.map((type, index) => (
          <FormComponent key={index} type={type} />
        ))
      )}
    </div>
  );
};
