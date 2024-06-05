import React, { useContext } from "react";
import { ModalContext } from "../App";

export type workType = {
  id: string;
  title: string;
  year: string;
  association: string;
  category: string;
};

interface WorkThumbnailProps {
  work: workType;
}

const WorkThumbnail: React.FC<WorkThumbnailProps> = ({ work }) => {
  const { modal, setModal } = useContext(ModalContext);
  return (
    <div className="lg:w-[33%] w-full h-auto flex flex-col justify-start items-center p-6">
      <div
        className=" w-full h-[170px] z-20 cursor-pointer bg-[#9f7d35] rounded-lg overflow-hidden relative drop-shadow-lg object-cover"
        onClick={() => setModal({ open: true, id: work.id })}
      >
        <img
          src={`/portfolio/${work.id}.png`}
          className="h-full absolute object-cover  duration-500 transition-all"
        />
      </div>
      <p className="font-bold text-base text-[#9f7d35] mt-4">{work.title}</p>
      <p className="font-md text-xs text-[#9f7d35] mt-1">
        {work.year} | {work.association}
      </p>
    </div>
  );
};

export default WorkThumbnail;
