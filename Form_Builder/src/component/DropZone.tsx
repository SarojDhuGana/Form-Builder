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
    <>
      <div>
        <h1 className="text-center text-2xl text-orange-600">Create Form</h1>
      </div>
      <div ref={dropRef} style={{ minHeight: "300px" }}>
        {components.length === 0 ? (
          <p className="text-xl text-center mt-10 p-20 rounded-xl border-2 bg-gray-200">
            <div className="text-4xl text-blue-500 ">+</div>
            <span className="font-sans">Drage the component here</span>
          </p>
        ) : (
          components.map((type, index) => (
            <FormComponent key={index} type={type} />
          ))
        )}
      </div>
    </>
  );
};
