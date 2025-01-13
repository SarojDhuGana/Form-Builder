import React, { useState } from "react";
import styled from "styled-components";
import { ComponentLibrary } from "./ComponentLibrary";
import { DropZone } from "./DropZone";
import { FormPreview } from "./FormPreview";
import { generateSchema } from "./utils/schemaUtils";
import { z } from "zod";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const BuilderContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px dashed #ccc;
  border-radius: 8px;
  min-height: 300px;
  padding: 20px;
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
`;

const FormBuilder: React.FC = () => {
  const [components, setComponents] = useState<string[]>([]);
  const [previewMode, setPreviewMode] = useState(false);

  const handleDrop = (type: string) => {
    setComponents((prev) => [...prev, type]);
  };

  const handleGenerateSchema = () => {
    const schema = generateSchema(components);
    console.log("Generated Schema:", schema);
  };

  const validateForm = () => {
    const schema = z.object(
      components.reduce(
        (acc, type, index) => ({
          ...acc,
          [`field_${index}`]: z.string().nonempty(`${type} field is required`),
        }),
        {} as Record<string, z.ZodTypeAny>
      )
    );

    try {
      schema.parse(
        components.reduce(
          (acc, _, index) => ({
            ...acc,
            [`field_${index}`]: "Some Value",
          }),
          {}
        )
      );
      alert("Form is valid!");
    } catch (err) {
      console.error("Validation Error:", err.errors);
      alert("Validation failed!");
    }
  };

  return (
    <Container>
      <ComponentLibrary />
      <BuilderContainer>
        {previewMode ? (
          <FormPreview components={components} />
        ) : (
          <DropZone onDrop={handleDrop} components={components} />
        )}
        <Button onClick={() => setPreviewMode(!previewMode)}>
          {previewMode ? "Edit Mode" : "Preview Mode"}
        </Button>
      </BuilderContainer>
      <div>
        <Button onClick={handleGenerateSchema}>Generate JSON Schema</Button>
        <Button onClick={validateForm}>Validate Form</Button>
      </div>
    </Container>
  );
};

export default FormBuilder;
