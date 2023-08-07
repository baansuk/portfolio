import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../App";
import { Link } from "react-router-dom";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const MUFF5 = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { modal, setModal } = useContext(ModalContext);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      modalRef.current && setScrollY(modalRef.current.scrollTop);
      modalRef.current && console.log(modalRef.current.scrollTop);
    };

    modalRef.current &&
      modalRef.current.addEventListener("scroll", handleScroll);

    return () => {
      modalRef.current &&
        modalRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[800px] noScroll flex flex-col justify-start items-center bg-[#e16812] font-md text-[#f6f3a3]">
      <div className="w-full h-[70px] font-md flex flex-row justify-between items-center fixed p-3 pl-8 text-xl bg-[#e16812]">
        <p>제5회 무중력영화제 브랜딩</p>{" "}
        <div
          className="w-[40px] cursor-pointer font-thin text-xl"
          onClick={() => setModal({ open: false, id: "" })}
        >
          ╳
        </div>
      </div>
      <div
        className="w-full mt-[70px] h-[700px] flex flex-col justify-start items-center typeMuff5 overflow-y-auto overflow-x-hidden snap-y snap-mandatory relative"
        ref={modalRef}
      >
        <div className="w-full h-full flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative lg:p-10">
          <img
            className="lg:h-full h-[80%] absolute left-[23%] lg:top-0 top-[10%] object-cover subpixel-antialiased"
            src="/muff5_poster.png"
            alt="muff related"
          />
          <img
            className="h-[100px] absolute bottom-[12%] lg:left-[6%] object-cover subpixel-antialiased"
            src="/muff5_logo.png"
            alt="muff related"
          />
          <div className="lg:w-[55%] w-full h-[700px] lg:p-5 p-2 flex flex-col justify-start items-start z-10">
            <p className="font-black  px-3 underline">
              MUJUNGRYUCK FILM FESTIVAL SEOUL ‘22
            </p>
            <p className="p-3 text-left lg:text-base text-sm w-[55%]">
              제5회 무중력영화제는 ‘함께, 공존, 상생’을 출품주제로 선정해 현재
              우리가 직면한 다양한 사회적 이슈를 바라보고자 했습니다.
              <br />
              <b className="font-black"> “찬란할 내일의 우리에게”</b>라는
              슬로건은 공존과 상생을 통해 우리의 내일이 찬란할 것이라는 희망적인
              메시지를 담고 있습니다.
            </p>
          </div>
          <div className="lg:w-[55%] absolute lg:p-5 lg:bottom-[10%] bottom-[15%] lg:right-[3%] p-2 lg:flex flex-col justify-start items-end z-10 hidden ">
            <p className="font-black  px-3 underline">LOGOTYPE REFINEMENT</p>
            <p className="p-3 text-right lg:text-base text-sm w-[55%]">
              기존의 무중력영화제 로고에 다양한 색을 더해 제5회 무중력영화제에서
              전달하고자 하는 희망적인 메시지를 강조하고자 했습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="h-full lg:h-[80%] object-cover absolute left-0 top-0 blur-lg lg:blur-none "
            src="/muff5_ext.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="h-[250px] object-cover absolute lg:right-[4%] bottom-0 lg:bottom-[5%] z-10 drop-shadow-lg  "
            src="/muff5_trophy.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="w-[200px] absolute lg:-left-5 bottom-[20%] object-cover z-20"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            src="/muff5_objs-27.png"
            alt="mujungryuck film festival related"
          />

          <div className="w-full h-[700px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute w-[full] lg:w-[52%] right-[5%] top-[5%] h-full text-right flex flex-col justify-start items-end">
            <p className="px-3 font-black underline">DESIGN DIRECTION</p>
            <p className="p-3 lg:text-base text-sm">
              다양한 색을 가진 유리들이 공존하여 찬란한 집합체를 이루어내는 것이
              영화제의 주제와 잘 어울려{" "}
              <b className="font-black">스테인드글라스</b>를 메인 테마로
              선정하였습니다. 그리고 스테인드 글라스를 통해 들어오는 빛을
              표현하기에 적합하며 찬란한 요소들을 뒷받침해주기 좋은 색이라고
              생각했던 주황색을 제5회 무중력영화제의 메인컬러로 삼았습니다.
            </p>
          </div>
          <div className="absolute w-full lg:w-[52%] right-[5%] top-[40%] h-full text-right flex flex-col justify-start items-end">
            <p className="px-3 font-black underline">TROPHY DESIGN</p>
            <p className="p-3 lg:text-base text-sm">
              영화제 트로피에 본 축제의 취지와 의의가 담겼으면 좋겠다는 생각에
              유리공방에 의뢰하여 포스터에 그려진 유리창 모양으로 특별한
              스테인드글라스 트로피를 제작했습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="w-full absolute lg:left-0 top-[60%] object-cover"
            src="/muff5_bg-1.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="w-[120px] absolute lg:right-0 bottom-0 object-cover"
            style={{ transform: `translateY(${(scrollY / 3) * 0.4}px)` }}
            src="/muff5_objs-26.png"
            alt="mujungryuck film festival related"
          />

          <img
            className="w-[100px] absolute lg:right-0 bottom-[30%] object-cover z-20 "
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            src="/muff5_objs-26.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="lg:h-[300px] h-[80%]  absolute lg:left-[5%] top-[40%] z-10 object-cover drop-shadow-lg transition-all"
            src="/muff5_sns-9.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="lg:h-full h-[80%]  absolute lg:right-[5%]  object-cover drop-shadow-lg transition-all"
            src="/muff5_sns-26.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="w-[100px] absolute lg:-right-[40%] bottom-[10%] object-cover z-20"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            src="/muff5_objs-25.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="w-[100px] absolute lg:left-[30%] top-[20%] object-cover z-20"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            src="/muff5_objs-27.png"
            alt="mujungryuck film festival related"
          />

          <div className="w-full h-[700px] relative flex flex-col justify-start items-start"></div>
          <div className=" absolute w-[50%] left-[6%] top-[10%] text-left flex flex-col justify-start items-start">
            <p className="px-3 font-black underline">SNS CONTENTS DESIGN</p>
            <p className="p-3 lg:text-base text-sm">
              스테인드글라스라는 컨셉에 맞게 각각의 피드가 어우러져 조화를
              이루도록 디자인했습니다. 위 아래가 모두 연결될 수 있도록 설계된
              디자인 시스템을 바탕으로 컨텐츠를 삽입하여 하나씩 밀리거나 줄이
              바뀌어도 여전히 서로 유기적으로 얽혀있는 인스타그램 피드를
              구현하였습니다.
            </p>
            <a
              className="flex flex-row p-3 gap-2"
              href="http://www.nwtnews.co.kr/news/articleView.html?idxno=71291"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className=" hover:bg-[#f6f3a3] hover:text-[#e16812]">
                무중력영화제 인스타그램{" "}
              </p>
              <ExternalLinkIcon color="#f6f3a3" width="15px" />
            </a>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="w-[90%] absolute lg:-right-[10%] top-[60%] object-cover opacity-80"
            src="/muff5_bg-1.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="w-[120px] absolute lg:right-[25%] -top-[25%] object-cover z-20"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            src="/muff5_objs-25.png"
            alt="mujungryuck film festival related"
          />

          <img
            className="lg:h-[70%] absolute lg:right-0 top-0 object-cover drop-shadow-lg transition-all"
            src="/muff5_merch-24.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="lg:h-[75%] absolute lg:-left-20 bottom-0 z-10 object-cover"
            src="/muff5_merch-10.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="lg:h-[50%] absolute lg:-right-0 bottom-0 z-10 object-cover"
            src="/muff5_merch-9.png"
            alt="mujungryuck film festival related"
          />

          <div className="w-full h-[700px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute lg:px-10 w-full top-[15%] left-[20%] lg:h-[170px] lg:w-[58%] text-left bg-[#e16812]">
            <p className="px-3 font-black underline  lg:bg-transparent ">
              MERCH
            </p>
            <p className="p-3 lg:text-base text-sm w-full lg:bg-transparent ">
              공방에서 주문제작한 스테인드글라스 키링과 색유리 마그넷, 영화제
              당일 관객투표시 필요한 볼펜 또한 다양한 뚜껑 색을 가진 모나미
              펜으로 선정하여 구성했습니다. 리플렛 또한 스테인드글라스 창문을
              형상화하여 아치형으로 컷팅하여 배포했으며, 각각의 영화를
              일러스트로 그린 엽서세트의 커버도 아치형의 창문을 내어 전반적인
              디자인 테마를 따라갔습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="w-[170px] absolute lg:right-[5%] top-[60%] object-cover z-20"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            src="/muff5_objs-25.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="w-[100px] absolute lg:right-[30%] top-0 object-cover z-20"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            src="/muff5_objs-27.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="lg:h-[70%] absolute lg:left-0 top-0 object-cover  transition-all"
            src="/muff5_merch-25.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="lg:w-full absolute lg:left-0 -bottom-10 object-cover drop-shadow-lg"
            src="/muff5_merch-26.png"
            alt="mujungryuck film festival related"
          />

          <div className="w-full h-[700px] relative flex flex-col justify-start items-end"></div>
          <div className="absolute lg:px-20 w-full h-[300px] top-[28%] right-0 lg:h-auto lg:w-[65%] text-right">
            <p className="px-3 font-black underline lg:bg-transparent ">
              ILLUSTRATIONS
            </p>
            <p className="p-3 lg:text-base text-sm lg:bg-transparent ">
              청년 영화인들에게 의미가 있는 기념품을 제작하자는 취지로 각각의
              영화를 일러스트로 표현한 포스터와 엽서들을 제작했습니다. 다양한
              장르의 영화들이 출품되어서 장르에 맞는 각양각색의 일러스트 작업을
              할 수 있었습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="w-full absolute lg:-right-[20%] bottom-0 object-cover opacity-80 rotate-180"
            src="/muff5_bg-1.png"
            alt="mujungryuck film festival related"
          />
          <img
            className="lg:h-[85%] absolute lg:left-0 -bottom-10 object-cover drop-shadow-lg"
            src="/muff5_photo.png"
            alt="mujungryuck film festival related"
          />

          <div className="w-full h-[700px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute lg:px-10 w-full h-[300px] top-[10%] right-0 lg:h-auto lg:w-[48%] text-left ">
            <p className="px-3 font-black underline  ">FURTHER INFORMATIONS</p>
            <p className="p-3 lg:text-base text-sm whitespace-pre-wrap ">
              주최/주관: 무중력지대 양천, 시네마디, 서울특별시, 양천구{`\n`}
              기획팀: 오유진(팀장) 양보라, 황반석{`\n`}
              기획단(시네마디 5기): 강수현 김경혜 도수연 유민지 이현지 정채원
              {`\n`}
              디자인: 황반석{`\n`}
            </p>
            <div className="p-3 lg:text-base text-sm whitespace-pre-wrap underline flex flex-col justify-start items-end ">
              <a
                className="flex flex-row gap-2"
                href="https://www.instagram.com/youthzone_muff/"
                target="_blank"
                rel="noopener noreferrer"
              >
                무중력영화제 인스타그램{" "}
                <ExternalLinkIcon color="#f6f3a3" width="15px" />
              </a>
              <a
                className="flex flex-row gap-2 "
                href="https://movie.daum.net/filmfest/main?filmfestId=360&evtId=3830"
                target="_blank"
                rel="noopener noreferrer"
              >
                제5회 무중력영화제 다음영화 정보{" "}
                <ExternalLinkIcon color="#f6f3a3" width="15px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MUFF5;
