import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../App";
import { Link } from "react-router-dom";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const MZY = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [mzy, setMzy] = useState(false);
  const [ky, setKy] = useState(false);
  const [images, setImages] = useState([
    "/portfolio/mzy_illust_1.png",
    "/portfolio/mzy_illust_2.png",
    "/portfolio/mzy_illust_3.png",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 2) {
          images.push(images[prevIndex - 1]);
          return prevIndex + 1;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    <div className="w-full h-full noScroll flex  flex-col justify-start overflow-hidden items-center bg-[#fbf2f3] font-md text-[#5a273a] leading-5">
      <div className="w-full h-[10%] font-md flex flex-row justify-between items-center border-b-[0.5px] border-[#d3a3aa] fixed p-3 pl-8 text-xl bg-[#fbf2f3]">
        <p>서울특별시 청년공간 무중력지대 양천 브랜딩</p>{" "}
        <div
          className="w-[40px] cursor-pointer font-thin text-xl"
          onClick={() => setModal({ open: false, id: "" })}
        >
          ╳
        </div>
      </div>
      <div className="mt-[68px] w-full h-full flex flex-col justify-start items-center typeMzy overflow-y-auto overflow-x-hidden snap-y snap-mandatory relative">
        <div className="w-full h-full flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative lg:p-10">
          <img
            className="lg:w-full lg:h-auto h-full absolute left-0 top-[0%] object-cover subpixel-antialiased"
            src="/portfolio/mzy_cover.png"
            alt="youthzone related"
          />
          <div className="h-[732px] w-[30%]"></div>
          <div className="lg:w-[80%] w-full h-[640px] lg:p-5 p-2 flex flex-col justify-center lg:justify-end items-end z-10 mb-20">
            <p className="font-black  px-3 underline">
              YOUTHZONE YANGCHEON, SEOUL
            </p>
            <p className="p-3 text-right text-[14px]">
              서울특별시 청년공간 무중력지대 양천은 양천구 목동에 위치한
              청년공간으로, 지역 청년들의 거점 마련과 네트워킹, 취업지원 등의
              목적으로 운영되었습니다. 2023년 현재는 운영이 종료되었으나
              2018년부터 5년간 다양한 프로그램과 정책 소개 등으로 지역 청년들을
              지원하고 수차례 최우수기관에 선정되는 등 활발한 활동을 해
              나갔습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="h-full lg:h-auto lg:w-[90%] object-cover absolute right-0 bottom-0 "
            src="/portfolio/mzy_leaflet.png"
            alt="youthzone related"
          />
          <img
            className="w-[200px] object-cover absolute lg:left-[10%] lg:top-[5%] top-[2%] z-10 left-[25%] hover:scale-110 transition-all"
            src="/portfolio/mzy_sticker.png"
            alt="youthzone related"
          />

          <div className="w-full h-[732px] relative flex flex-col justify-end items-start"></div>
          <div className="absolute lg:p-20 w-full lg:w-[45%] bottom-[55%] lg:bottom-0 h-full text-left flex flex-col justify-end items-start">
            <p className="px-3 font-black underline">DESIGN DIRECTION</p>
            <p className="p-3 text-[14px]">
              기존에 사용되던 ‘무지양’이라는 캐릭터를 단순 마스코트를 넘어서
              무중력지대 양천이라는 기관의 아이덴티티로 설정했습니다. 무지양의
              친근한 이미지와 분홍계열의 차분한 컬러 사용으로 지역 청년들과의
              심리적 거리감을 더욱 좁힐 수 있었습니다.
            </p>
            <p className="p-3 mt-10 text-xs hidden lg:flex text-[#9b6464]">
              3단 접지 리플렛으로 제작된 공간이용 가이드는 리뉴얼된 무중력지대
              양천의 디자인 시스템을 그대로 적용한 디자인물입니다. 핑크 톤의
              디자인에 마스코트 캐릭터 무지양을 활용하여 공간에 대한 직관적이고
              친근한 설명을 시도하였습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="lg:h-[90%] h-[80%]  absolute lg:left-0 bottom-0 object-cover hover:scale-110 transition-all"
            src="/portfolio/mzy_mascot-mzy.png"
            onMouseOver={() => setMzy(true)}
            onMouseLeave={() => setMzy(false)}
            alt="youthzone related"
          />
          {mzy && (
            <img
              className="w-[350px]  absolute lg:left-[20%] left-[40%] top-[15%] lg:top-[10%] object-cover "
              src="/portfolio/mzy_mascot_mzy.png"
              onMouseOver={() => setMzy(true)}
              alt="youthzone related"
            />
          )}
          <img
            className="h-[40%] absolute lg:left-[30%] bottom-0 object-cover hover:scale-110 transition-all"
            src="/portfolio/mzy_mascot-ky.png"
            onMouseOver={() => setKy(true)}
            onMouseLeave={() => setKy(false)}
            alt="youthzone related"
          />
          {ky && (
            <img
              className="w-[310px]  absolute -left-[15%] lg:left-[35%] bottom-[23%] object-cover "
              src="/portfolio/mzy_mascot_ky.png"
              onMouseOver={() => setKy(true)}
              alt="youthzone related"
            />
          )}

          <p className="px-5 py-10 absolute bottom-[8%] right-[5%] text-xs whitespace-pre-wrap text-[#9b6464] hidden lg:flex">
            라인드로잉 형태의 무지양은 굿즈 제작시 주로 활용되었습니다.
          </p>
          <div></div>
          <div className="lg:p-10 w-full h-[732px]  lg:w-[50%] text-right">
            <p className="px-3 font-black underline  lg:bg-transparent bg-[#fbf2f3]">
              MASCOT CHARACTER
            </p>
            <p className="p-3 text-[14px]">
              새롭게 디자인된 무중력지대 양천의 마스코트 캐릭터는 무지양과
              꼬양입니다. 무지양은 분홍색 양이자 기관을 대표하는 캐릭터로 지역
              청년들과 관계를 맺고 있는 무중력지대 양천을 대표하는 캐릭터이며,
              꼬양은 꼬마 양파의 줄인말로 무지양과는 반대로 지역 청년들을
              대표하는 캐릭터입니다.
            </p>
            <img
              className="absolute right-[8%] bottom-[5%] mx-10 my-20 p-3 h-[30%] hidden lg:flex"
              src="/portfolio/mzy_friends.png"
              alt="youthzone related"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <div className="image-slider">
            {images.map((img, index) => (
              <img
                alt="youthzone related"
                key={index}
                className="slider-image"
                src={img}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}
              />
            ))}
          </div>
          <img
            src="/portfolio/mzy_photo.png"
            className="absolute w-[60%] top-[10%] left-[8%] drop-shadow-lg"
            alt="youthzone related"
          />

          <div className="w-full h-[732px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute lg:px-20 w-full h-[300px] bottom-[20%] lg:h-auto lg:w-[60%] text-left">
            <p className="px-3 font-black underline  lg:bg-transparent bg-[#fbf2f3]">
              CHARACTER USAGE
            </p>
            <p className="p-3 text-[14px]  lg:bg-transparent bg-[#fbf2f3]">
              무지양과 꼬양 캐릭터는 여러가지 디자인물에 사용되었습니다. 기관
              외벽의 현수막부터 포스터, 온라인 홍보물까지, 기관에서는 무지양과
              꼬양의 얼굴을 빌려 지역 청년들에게 유용한 정보를 제공하고
              소통했습니다. 이렇게 자주 시각화되는 무지양(관계자)과
              꼬양(참여자)의 관계를 통해 청년들이 무중력지대 양천에 더욱
              친근감을 가질 수 있었습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <img
            className="h-[180px] object-cover absolute left-[28%] -top-[3%]  "
            src="/portfolio/mzy_merch-sticker1.png"
            alt="youthzone related"
          />
          <img
            className="h-[75%] object-cover absolute left-0 top-0  "
            src="/portfolio/mzy_merch-sachet.png"
            alt="youthzone related"
          />
          <img
            className="h-[70%] object-cover absolute right-0 top-0  "
            src="/portfolio/mzy_merch-book.png"
            alt="youthzone related"
          />
          <img
            className="h-[90%] object-cover absolute -left-5 bottom-0  "
            src="/portfolio/mzy_merch-socks.png"
            alt="youthzone related"
          />
          <img
            className="h-[190px] object-cover absolute -left-[5%] bottom-[20%]  "
            src="/portfolio/mzy_merch-sticker3.png"
            alt="youthzone related"
          />
          <img
            className="h-[220px] object-cover absolute -right-[5%] bottom-0  "
            src="/portfolio/mzy_merch-sticker2.png"
            alt="youthzone related"
          />

          <img
            className="h-[220px] object-cover absolute -right-[5%] top-0  "
            src="/portfolio/mzy_merch-sticker4.png"
            alt="youthzone related"
          />
          <img
            className="h-[100px] object-cover absolute right-[40%] top-[35%] object-center "
            src="/portfolio/mzy_youthzoneyangcheon.png"
            alt="youthzone related"
          />

          <div className="w-full h-[732px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute lg:px-20 w-full h-[300px] bottom-[15%] right-0 lg:h-auto lg:w-[60%] text-left">
            <p className="px-3 font-black underline lg:bg-transparent bg-[#fbf2f3]">
              MERCH
            </p>
            <p className="p-3 text-[14px] lg:bg-transparent bg-[#fbf2f3]">
              무중력지대 양천에서 만든 굿즈들은 실용성을 최우선으로
              선정했습니다. 영화제의 경우는 행사를 기념하는 목적이 있으므로
              기념품으로서의 굿즈도 가치가 있으나 기관 방문 및 이벤트를 통해
              기관의 굿즈를 수령하는 경우 사용자들의 만족도가 가장 높았던 것은
              실용성이 있는 굿즈들이었습니다. 따라서 양말, 샤쉐 등 실질적인
              쓸모가 있는 굿즈들을 만들게 되었습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between justify-start items-start snap-center relative">
          <a
            href="https://blog.naver.com/youthzone0_0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-[75%] hidden lg:flex object-cover absolute left-[5%] bottom-[10%] shadow-xl opacity-95 z-10 hover:z-20 hover:scale-105 transition-all cursor-pointer"
              src="/portfolio/mzy_sns-46.png"
              alt="youthzone related"
            />
          </a>
          <a
            href="https://www.instagram.com/youthzone3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-[70%] object-cover hidden lg:flex absolute right-[35%] top-5 shadow-xl rounded-3xl z-10 hover:z-20 hover:scale-105 transition-all cursor-pointer"
              src="/portfolio/mzy_sns-47.png"
              alt="youthzone related"
            />
          </a>

          <div className="w-full h-[732px] relative flex flex-col justify-start items-start"></div>
          <div className="absolute lg:px-10 w-full h-[300px] bottom-[10%] right-0 lg:h-auto lg:w-[35%] text-right">
            <p className="px-3 font-black underline  bg-[#fbf2f3]">
              FURTHER INFORMATIONS
            </p>
            <p className="p-3 text-[14px] whitespace-pre-wrap bg-[#fbf2f3]">
              무중력지대 양천 센터장: 문유진{`\n`}
              팀장: 오유진(청년지원), 정초원(공간운영){`\n`}
              매니저: 양보라, 이태균, 황반석{`\n`}
              홍보/디자인 담당: 황반석{`\n`}
            </p>
            <div className="p-3 text-[14px] whitespace-pre-wrap underline flex flex-col justify-start items-end ">
              <a
                className="flex flex-row gap-2 "
                href="https://blog.naver.com/youthzone0_0"
                target="_blank"
                rel="noopener noreferrer"
              >
                무중력지대 양천 네이버 블로그{" "}
                <ExternalLinkIcon color="#5a273a" width="15px" />
              </a>
              <a
                className="flex flex-row gap-2"
                href="https://www.instagram.com/youthzone3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                무중력지대 양천 인스타그램{" "}
                <ExternalLinkIcon color="#5a273a" width="15px" />
              </a>

              <a
                className="flex flex-row gap-2"
                href="http://www.nwtnews.co.kr/news/articleView.html?idxno=71291"
                target="_blank"
                rel="noopener noreferrer"
              >
                무중력지대 양천 관련 기사{" "}
                <ExternalLinkIcon color="#5a273a" width="15px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MZY;
