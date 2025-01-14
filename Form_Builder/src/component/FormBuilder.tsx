import React, { useState } from "react";
import styled from "styled-components";
import { ComponentLibrary } from "./ComponentLibrary";
import { DropZone } from "./DropZone";
import { FormPreview } from "./FormPreview";
import { generateSchema } from "./utils/schemaUtils";
// import Typewriter from "./animation/Typewriter";
import { z } from "zod";
// Styled component is used to for resuable css.
const Container = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BuilderContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px dashed #ccc;
  border-radius: 8px;
  min-height: 300px;
  padding: 20px;

  @media (max-width: 768px) {
    min-height: 200px;
    padding: 15px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
  }
`;

const FormBuilder: React.FC = () => {
  const [components, setComponents] = useState<string[]>([]);
  const [previewMode, setPreviewMode] = useState(false);
  const [schemaJSON, setSchemaJSON] = useState<string>("");
  // handle drop type
  const handleDrop = (type: string) => {
    setComponents((prev) => [...prev, type]);
  };
  // generating the json schema
  const handleGenerateSchema = () => {
    const schema = generateSchema(components);
    setSchemaJSON(JSON.stringify(schema, null, 2));
  };
  // validation form method
  const validateForm = () => {
    const schema = z.object(
      components.reduce(
        (acc, type, index) => ({
          // custom error message
          ...acc,
          [`field_${index}`]: z.string().nonempty(`${type} field is required`),
        }),
        {} as Record<string, z.ZodTypeAny>
      )
    );
    try {
      schema.parse(FormData);
      alert("Form is valid!");
    } catch (err) {
      console.error("Validation Error:", err.errors);
      alert("Validation failed!");
    }
  };

  return (
    <>
      <Container>
        {/* Component lib */}
        <ComponentLibrary />
        {/* Drag and drop section */}
        <BuilderContainer>
          {previewMode ? (
            <FormPreview components={components} />
          ) : (
            <DropZone onDrop={handleDrop} components={components} />
          )}
        </BuilderContainer>
        {/* Preview section for user testing */}
        <div className="h-20 -mt-5">
          <Button
            onClick={() => setPreviewMode(!previewMode)}
            className="text-sm text-orange-400 font-semibold"
          >
            {previewMode ? "Edit Mode" : "Preview Mode"}
          </Button>

          {/* this section shown only while clicking preview */}
          <div className="flex-col flex">
            <Button onClick={handleGenerateSchema}>Generate</Button>
            <Button onClick={validateForm}>Submit</Button>
          </div>
        </div>
        {/* Genereate section */}
        <div className=" border-2 w-96 -ml-42 px-2 bg-gray-800 border-blue-200 shadow-inner shadow-pink-400 text-white rounded-md">
          <h3 className="text-center text-xl py-2 border-b-2 border-pink-600">
            Generated JSON Schema:
          </h3>
          {/* <Typewriter text={schemaJSON} speed={50} /> */}
          <pre className="bg-gray-800 rounded-md px-3 py-2">{schemaJSON}</pre>
        </div>
      </Container>
    </>
  );
};

export default FormBuilder;
