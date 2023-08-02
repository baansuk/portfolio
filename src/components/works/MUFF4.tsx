import React, { useContext } from "react";
import { ModalContext } from "../../App";

const MUFF4 = () => {
  const { modal, setModal } = useContext(ModalContext);
  return (
    <div className="w-full h-[800px] noScroll flex flex-col justify-start items-center bg-[#282a2b] text-[#b2b0b2]">
      <div className="w-full h-[70px] font-md flex flex-row justify-between items-center fixed p-3 pl-8 text-xl bg-[#282a2b]">
        <p>제4회 무중력영화제 브랜딩</p>{" "}
        <div
          className="w-[40px] cursor-pointer font-thin text-xl"
          onClick={() => setModal({ open: false, id: "" })}
        >
          ╳
        </div>
      </div>
      <div className="w-full mt-[70px] h-[700px] flex flex-col justify-start items-center typeMuff4 overflow-y-auto overflow-x-hidden snap-y snap-mandatory relative">
        <div className="w-full h-full flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative  p-10">
          <img
            className="h-[650px] lg:h-full absolute lg:inset-0 object-cover object-bottom"
            src="/muff4_1.png"
          />
          <div className="h-[700px] w-[30%]"></div>
          <div className="lg:w-[80%] w-full h-[640px] lg:p-5 p-2 flex flex-col justify-start items-end z-10">
            <img
              className=" w-full lg:w-[700px] object-cover py-10 lg:p-10 lg:mb-10 "
              src="/muff4_poster.png"
            />
            <p className="font-bold px-3 underline">
              MUJUNGRYUCK FILM FESTIVAL, SEOUL'21
            </p>
            <p className="p-3 text-right lg:text-base text-sm">
              무중력영화제(MUFF)는 2018년부터 청년 영화인들이 작품 상영을 통해
              관객과 소통할 기회를 제공하기 위해 매년 진행되었습니다. 2021년,
              “우리들의 공간으로 당신을 초대합니다.” 라는 슬로건으로 개최된
              제4회 무중력영화제는 ‘공간’을 주제로, 팬데믹으로 인해 새롭게
              정의되어가는 물리적, 혹은 심리적 공간에 대한 이야기들을
              담아냈습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <video
            className="h-[90%] object-cover absolute left-[3%] bottom-0 lg:blur-none blur-lg "
            src="/muff4_door.mp4"
            autoPlay
            loop
          />

          <div className="w-full h-[700px] relative flex flex-col justify-start items-end"></div>
          <div className="absolute lg:p-20 w-full lg:w-[70%] h-full  right-0 text-right flex flex-col justify-start items-end">
            <p className="px-3 font-bold underline">DESIGN DIRECTION</p>
            <p className="p-3 lg:text-base text-sm">
              팬데믹으로 인해 서로 단절된 일상에서 느끼게 된 무미건조함,
              무기력함 등을 표현하기 위해 전반적인 색을 흑백 모노톤으로
              맞추었습니다. 동시에 영화와 관련된 요소는 여러가지 색을 넣어
              포스트 팬데믹 시대의 건조한 삶 속에서 영화라는 매체가 우리의 삶에
              얼마나 풍부한 색채를 불어넣는지를 나타내고자 했습니다.
            </p>

            <div className="w-full mt-10 flex flex-row px-3 justify-end items-center gap-2">
              <div className="w-[50%] h-[60px] bg-[#b2b0b2] text-sm p-1 text-[#282a2b] border-[#b2b0b2] border-[0.1px] flex flex-col justify-end items-end">
                {" "}
                #B2B0B2
              </div>
              <div className="w-[30%] h-[60px] bg-[#5f6061] border-[#b2b0b2] border-[0.1px] flex flex-col justify-end items-end p-1">
                #5F6061
              </div>
              <div className="w-[20%] h-[60px] bg-[#282a2b] border-[#b2b0b2] border-[0.1px] flex flex-col justify-end items-end p-1 ">
                #282A2B
              </div>
            </div>

            <p className="w-full text-left px-3 font-bold underline mt-20">
              DOOR
            </p>
            <p className="text-left w-full p-3 lg:text-base text-sm">
              테마로 선택한 '문'은 공간과 공간을 이어주는 매개체로서의 의미를
              가집니다. 팬데믹으로 인해 외부와 단절되어 살아가는 많은 사람들에게
              온전히 고립되어 있기만한 물리적, 혹은 심리적 공간은 없으며, 우리는
              모두 문을 통해 외부와 소통하거나 마음을 나눌 수 있다는 메시지를
              전달하고자 했습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="w-full lg:w-[80%]  absolute lg:right-0 bottom-0 p-10 hidden lg:flex"
            src="/muff4_trailer.png"
          />
          <div className="w-full h-[400px] lg:h-[700px] relative flex flex-col justify-start items-start">
            <iframe
              className="w-[640px] h-[360px] top-0 left-0 z-20 relative lg:absolute lg:m-10 drop-shadow-lg"
              src="https://www.youtube.com/embed/vJ9QkgGk97k"
              title="YouTube video player"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="px-5 py-10 absolute bottom-0 left-0 text-xs whitespace-pre-wrap">
            애니메이션 디자인/제작: 황반석{`\n`}배경음악: Invitation(황반석
            작곡)
          </p>
          <div className="lg:p-10 w-full h-[300px] lg:h-auto lg:w-[60%] text-right">
            <p className="px-3 font-bold underline">TRAILER</p>
            <p className="p-3 lg:text-base text-sm">
              4회 무중력영화제의 섹션은 “돌아보다”, “마주보다”, “바라보다”로
              물리적, 혹은 심리적인 공간 내에서 서로 어떻게 상호작용하는지를
              각각의 의미를 담은 영화들을 통해 그려냈습니다. 트레일러에서는
              각각의 섹션명을 시각화하기 위하여 바람에 따라 날아다니는 초대장을
              본 사람들의 시선을 표현했습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="h-full object-cover absolute left-0 bottom-0 "
            src="/muff4_merch_1.png"
          />

          <img
            className="h-[450px] absolute right-0 bottom-0 "
            src="/muff4_merch-cardbottom.png"
          />
          <img
            className="h-[460px] absolute right-0 top-0 object-cover"
            src="/muff4_merch-cardtop.png"
          />
          <img
            className="h-[250px] absolute m-1 lg:m-3 left-0 top-0 "
            src="/muff4_merch-tape.png"
          />
          <img
            className="h-[110px] absolute m-1 lg:m-3 right-[8%] top-[45%] "
            src="/muff4_icons-34.png"
          />
          <img
            className="h-[100px] absolute m-1 lg:m-3 right-[33%] bottom-[3%] "
            src="/muff4_icons-32.png"
          />
          <img
            className="h-[90px] absolute m-1 lg:m-3 right-[35%] top-[5%] "
            src="/muff4_icons-35.png"
          />

          <img
            className="h-[100px] absolute m-1 lg:m-3 left-[5%] top-[50%] "
            src="/muff4_icons-33.png"
          />
          <div className="w-full h-[700px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute lg:px-20 w-full h-[300px] top-[30%] lg:h-auto lg:w-[80%] text-left">
            <p className="px-3 font-bold underline">MERCH</p>
            <p className="p-3 lg:text-base text-sm">
              굿즈 디자인은 출품한 12개의 작품들 하나하나의 핵심 요소를
              아이콘으로 만들고 영화의 장면들을 일러스트로 그려내었습니다.
              온라인 상영회로 진행되었기 때문에 신청자에 한하여 굿즈를 택배로
              발송해야 했습니다. 따라서 너무 무게가 나가는 구성보단 카드
              캘린더나 엽서, 티켓, 책갈피 등의 가벼운 물품들 위주로 굿즈
              패키지가 구성되었습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="h-full object-cover absolute left-0 bottom-0 "
            src="/muff4_merch_1.png"
          />

          <img
            className="h-[450px] absolute right-0 bottom-0 "
            src="/muff4_merch-cardbottom.png"
          />
          <img
            className="h-[460px] absolute right-0 top-0 object-cover"
            src="/muff4_merch-cardtop.png"
          />
          <img
            className="h-[250px] absolute m-1 lg:m-3 left-0 top-0 "
            src="/muff4_merch-tape.png"
          />
          <div className="w-full h-[700px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute lg:px-20 w-full h-[300px] top-[30%] lg:h-auto lg:w-[80%] text-left">
            <p className="px-3 font-bold underline">MERCH</p>
            <p className="p-3 lg:text-base text-sm">
              굿즈 디자인은 출품한 12개의 작품들 하나하나의 핵심 요소를
              아이콘으로 만들고 영화의 장면들을 일러스트로 그려내었습니다.
              온라인 상영회로 진행되었기 때문에 신청자에 한하여 굿즈를 택배로
              발송해야 했습니다. 따라서 너무 무게가 나가는 구성보단 카드
              캘린더나 엽서, 티켓, 책갈피 등의 가벼운 물품들 위주로 굿즈
              패키지가 구성되었습니다.
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
              src="/muff4_poster_mu.png"
            />  */
}

export default MUFF4;
