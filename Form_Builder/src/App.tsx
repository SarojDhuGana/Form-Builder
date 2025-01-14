import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormBuilder from "./component/FormBuilder";
import Footer from "./Footer/Footer";
import Navigation from "./Header/Navigation";
import "./index.css";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "https://dhunganasaroj.com.np/" },
  {
    name: "Contact",
    href: "https://www.linkedin.com/in/saroj-dhungana-710909286/",
  },
];
const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Navigation links={links} />;
      </div>
      <div>
        <h1 className=" text-center p-5 mb-1 text-4xl capitalize text-pink-900">
          Interactive Form Builder
          <hr className=" mt-2   border-blue-900 shadow-lg shadow-pink-300" />
        </h1>
        <div className=" px-5 py-3">
          <FormBuilder />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </DndProvider>
  );
};

export default App;
