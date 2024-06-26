import React, { useContext } from "react";
import { ModalContext } from "../App";
import MUFF4 from "../components/works/MUFF4";
import MZY from "../components/works/MZY";
import MUFF5 from "../components/works/MUFF5";
import MZYIllust from "../components/works/MZYillust";
import Digilog from "../components/works/Digilog";
import MZYStory from "../components/works/MZYStory";

const Modal = ({}) => {
  const { modal, setModal } = useContext(ModalContext);
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full overflow-hidden fixed inset-0 z-40 backdrop-blur-md backdrop-filter p-20"
        onClick={() => setModal({ open: false, id: "" })}
      ></div>
      <div
        className="absolute h-[40px] bottom-0 w-full my-5 z-40 text-[#9f7d35] flex flex-row justify-center items-center"
        onClick={() => setModal({ open: false, id: "" })}
      >
        <p className=" w-full font-black text-base lg:text-base text-center leading-5 lg:leading-auto mx-3">
          calm and quiet.
        </p>
      </div>
      <div className="w-[100%] h-screen p-5 lg:px-[15%] pb-20 lg:pt-10 absolute flex flex-col justify-center items-center ">
        <div className="w-[100%] h-[100%] rounded-xl inset-0 z-40 drop-shadow-lg overflow-hidden flex flex-col justify-start items-start">
          {modal.id === "muff4" ? (
            <MUFF4 />
          ) : modal.id === "mzy" ? (
            <MZY />
          ) : modal.id === "muff5" ? (
            <MUFF5 />
          ) : modal.id === "mzyIllust" ? (
            <MZYIllust />
          ) : modal.id === "digilog" ? (
            <Digilog />
          ) : modal.id === "mzyStory" ? (
            <MZYStory />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
