import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { createContext, useEffect, useState } from "react";
import Modal from "./layout/Modal";

interface ModalState {
  open: boolean;
  id: string;
}

interface ModalContextType {
  modal: ModalState;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

export const ModalContext = React.createContext<ModalContextType>({
  modal: {
    open: false,
    id: "",
  },
  setModal: () => {},
});

function App() {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    id: "",
  });
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
        <ModalContext.Provider value={{ modal, setModal }}>
          {modal.open === true && <Modal />}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ModalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
