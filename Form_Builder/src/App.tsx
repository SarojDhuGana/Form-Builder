import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormBuilder from "./component/FormBuilder";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Interactive Drag-and-Drop Form Builder</h1>
        <FormBuilder />
      </div>
    </DndProvider>
  );
};

export default App;
