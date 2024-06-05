import React, { useContext, useState } from "react";
import { ModalContext } from "../../App";
import { Link } from "react-router-dom";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const MZYStory = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [section, setSection] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });
  return (
    <div className="w-full h-full noScroll text-sm flex flex-col justify-start items-center bg-[#ddd1c5] text-[#2c2b25] leading-6">
      <div className="w-full h-[10%] font-md flex flex-row justify-between items-center fixed p-3 pl-8 text-xl bg-[#ddd1c5]">
        <p>무중력스토리: 나의 이야기를 찾아서</p>{" "}
        <div
          className="w-[40px] cursor-pointer font-thin text-xl"
          onClick={() => setModal({ open: false, id: "" })}
        >
          ╳
        </div>
      </div>
      <div className="w-full mt-[68px] h-[732px] flex flex-col justify-start items-center typeMzyStory overflow-y-auto overflow-x-hidden snap-y snap-mandatory relative ">
        <div className="w-full h-full  flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative  p-10">
          <img
            className=" lg:h-[90%] absolute object-cover self-center drop-shadow-xl"
            src="/portfolio/mzyStory_poster.png"
            alt="mzy stories related"
          />
          <img
            className=" lg:h-[90px] left-10 top-0 rotate-12 absolute object-cover self-center drop-shadow-xl"
            src="/portfolio/mzyStory_icons-31.png"
            alt="mzy stories related"
          />
          <img
            className=" lg:h-[100px] left-[32%] bottom-10 -rotate-45 absolute object-cover self-center drop-shadow-xl"
            src="/portfolio/mzyStory_icons-30.png"
            alt="mzy stories related"
          />
          <img
            className=" lg:h-[120px] left-10 bottom-[35%] rotate-[20deg] absolute object-cover self-center drop-shadow-xl"
            src="/portfolio/mzyStory_icons-33.png"
            alt="mzy stories related"
          />
          <img
            className=" lg:h-[100px] left-[35%] top-20 -rotate-12 absolute object-cover self-center drop-shadow-xl"
            src="/portfolio/mzyStory_icons-32.png"
            alt="mzy stories related"
          />
          <div className=" h-[732px]"></div>
          <div className="lg:w-[60%] w-full lg:p-5 p-2 flex flex-col justify-start items-end z-10">
            <p className="font-black px-3 underline">
              ZERO GRAVITY STORIES: TO FIND MY OWN STORIES
            </p>
            <p className="p-3 text-right lg:text-[15px] text-[15px]">
              무중력지대 양천에서 소규모로 진행했던 프로젝트, "무중력스토리:
              나의 이야기를 찾아서"는 지역 청년들이 참여하여 다양한 활동을 통해
              네트워킹을 할 수 있도록 만든 프로그램입니다. 프로그램의 테마가
              동화책이었기 때문에 관련 굿즈는 모두 동화와 관련된 일러스트를
              삽입했습니다.
            </p>
            <p className="p-3 text-right text-[12px] leading-4">
              '무중력스토리: 나의 이야기를 찾아서' 프로그램은 당시 제가 담당하여
              조직/운영하던 무중력지대 양천 홍보 기획 서포터즈 '무중력프렌즈'
              3기 참여자들과 함께 기획했습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full  flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative  p-10">
          <div className="w-full h-full absolute inset-0 flex flex-col justify-center items-center gap-3">
            <div className="w-[90%] h-[90%] flex flex-col justify-center items-center gap-3">
              {section.section1 === true && (
                <img
                  src="/portfolio/mzyStory_icons-30.png"
                  alt="mzy stories related"
                  className="w-[100px] object-cover absolute left-[13%] top-0 z-20 "
                />
              )}
              <div className="w-[80%] h-[40%] flex flex-row justify-center gap-5">
                <img
                  src="/portfolio/mzyStory_section1.jpg"
                  alt="mzy stories related"
                  className="object-cover rounded-xl hover:scale-105 transition-all  drop-shadow-lg"
                  onMouseOver={() =>
                    setSection({
                      section2: false,
                      section3: false,
                      section4: false,
                      section1: true,
                    })
                  }
                  onMouseLeave={() =>
                    setSection({ ...section, section1: false })
                  }
                />
                {section.section2 === true && (
                  <img
                    src="/portfolio/mzyStory_icons-32.png"
                    alt="mzy stories related"
                    className="w-[60px] object-cover absolute right-[13%] top-0 z-20 "
                  />
                )}
                <img
                  src="/portfolio/mzyStory_section2.jpg"
                  alt="mzy stories related"
                  className="object-cover rounded-xl hover:scale-105 transition-all  drop-shadow-lg"
                  onMouseOver={() =>
                    setSection({
                      section1: false,
                      section3: false,
                      section4: false,
                      section2: true,
                    })
                  }
                  onMouseLeave={() =>
                    setSection({ ...section, section2: false })
                  }
                />
              </div>
              <div className="w-full h-[18%]">
                <p className="p-3 text-center lg:text-[15px] text-[15px]">
                  프로그램은 여러개의 부스를 돌면서 준비한 활동을 하나하나 해
                  나가는 형식으로 진행되었으며, 각각의 부스는 특정한 동화를
                  테마로 꾸며져있고 해당 동화와 관련된 굿즈를 배부했습니다.
                  '어린왕자', '아라비안 나이트', '이상한 나라의 앨리스',
                  '세렌딥의 왕자', '보물섬' 등을 각각 테마로 삼은 부스들이
                  있었으며, 각 부스에서 배부했던 엽서(위)에서 볼 수 있듯이
                  무중력스토리 내 부스들은 모두 고유의 색상을 가지고 있었습니다.
                </p>
              </div>
              <div className="w-[80%] h-[40%] flex flex-row justify-center gap-5">
                {section.section3 === true && (
                  <img
                    src="/portfolio/mzyStory_icons-31.png"
                    alt="mzy stories related"
                    className="w-[95px] object-cover absolute left-[13%] bottom-2 z-20 "
                  />
                )}
                <img
                  src="/portfolio/mzyStory_section3.jpg"
                  alt="mzy stories related"
                  className="object-cover rounded-xl hover:scale-105 transition-all  drop-shadow-lg"
                  onMouseOver={() =>
                    setSection({
                      section1: false,
                      section2: false,
                      section4: false,
                      section3: true,
                    })
                  }
                  onMouseLeave={() =>
                    setSection({ ...section, section3: false })
                  }
                />
                {section.section4 === true && (
                  <img
                    src="/portfolio/mzyStory_icons-33.png"
                    alt="mzy stories related"
                    className="w-[60px] object-cover absolute right-[13%] bottom-2 z-20 "
                  />
                )}
                <img
                  src="/portfolio/mzyStory_section4.jpg"
                  alt="mzy stories related"
                  className="object-cover rounded-xl hover:scale-105 transition-all drop-shadow-lg"
                  onMouseOver={() =>
                    setSection({
                      section1: false,
                      section2: false,
                      section3: false,
                      section4: true,
                    })
                  }
                  onMouseLeave={() =>
                    setSection({ ...section, section4: false })
                  }
                />
              </div>
            </div>
          </div>
          <div className=" h-[732px]"></div>
        </div>
        <div className="w-full h-full  flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative  p-10">
          <img
            className=" lg:h-[70%] absolute object-cover self-center drop-shadow-xl"
            src="/portfolio/mzyStory_map.png"
            alt="mzy stories related"
          />

          <div className=" h-[732px]"></div>
          <div className="lg:w-[60%] w-full lg:p-5 p-2 flex flex-col justify-start items-end z-10">
            <p className="font-black px-3 underline">FURTHER INORMATIONS</p>
            <p className="p-3 text-right lg:text-[15px] text-[15px]">
              기획(무중력지대 양천): 오유진, 황반석
              <br />
              기획(무중력프렌즈 3기): 김민주, 김석영, 김연홍, 김윤지, <br />
              양아람, 정교영, 지은상, 황수정, 황예지 <br />
              디자인: 황반석
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*            <img
              className="h-full absolute lg:right-0 object-cover object-top"
              src="/portfolio/muff4_poster_mu.png"
            />  */
}

export default MZYStory;
