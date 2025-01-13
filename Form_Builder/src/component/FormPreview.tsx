import React from "react";
import { FormComponent } from "./FormComponent";

interface FormPreviewProps {
  components: string[];
}

export const FormPreview: React.FC<FormPreviewProps> = ({ components }) => {
  return (
    <div>
      <h3>Form Preview</h3>
      {components.map((type, index) => (
        <FormComponent key={index} type={type} />
      ))}
    </div>
  );
}; 
