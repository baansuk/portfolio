import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const parallax = document.getElementById("parallax");
    if (parallax) {
      window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax.style.backgroundPositionY = offset * 0.7 + "px";
      });
    }
  }, []);
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen relative w-full">
      <div className="relative w-full h-screen overflow-hidden snap-center">
        <div className="absolute top-[30%] left-[8%] text-[#593317] flex flex-col justify-start items-start">
          <p className=" font-black text-7xl">PORTFOLIO</p>
          <p className=" font-serif text-3xl italic my-4">Bansuk Hwang</p>
        </div>
        <div className="absolute top-[60%] left-[8%] text-[#593317] flex flex-row justify-start items-end">
          <div className="w-[180px] border-b border-[1px] mr-2 border-[#593317]"></div>
          <p className=" font-black text-3xl">calm and quiet.</p>
        </div>
        <div className="absolute top-[75%] left-[8%] text-[#593317] flex flex-col justify-start items-start">
          <p className=" font-md text-lg">010-2629-2693</p>
          <p className=" font-md text-lg">baansuk_hwang@naver.com</p>
        </div>
        <div className="w-full h-screen flex flex-col justify-end items-end absolute -z-10">
          <video
            id="parallax"
            className="inset-0 w-full h-full object-cover -z-20 object-bottom-right"
            autoPlay
            loop
            muted
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden snap-center bg-[#593317]">
        <div className="absolute  w-full my-5 z-20 text-[#9f7d35] flex flex-row justify-start items-end">
          <div className="w-[80%] border-b border-[1px] mr-2 border-[#9f7d35]"></div>
          <p className=" w-[20%] font-black text-3xl">calm and quiet.</p>
        </div>
        <div className="w-[30%] h-[100%] object-cover relative overflow-hidden">
          <img
            className="opacity-70 mix-blend-soft-light h-full object-cover"
            src="/profile_pic.jpg"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-start items-end absolute top-0 left-0 z-20">
          <p className=" w-[50%] text-[#9f7d35] text-lg m-28 indent-12">
            지난 몇 년 동안 다양한 시도와 경험, 그리고 실패들을 통해 디자인을 할
            때 추구할 가치를 정의하기 위해 노력했습니다. 물론 아직도 진행중이며
            앞으로도 계속해서 변화해나갈 것이지만 지금은 다른 사람들이 제
            작업물에 대해 묻거나 이야기할 때, "Calm and quiet"한 작업을
            하고있다고 말합니다. 이는 최근들어 시각적 정보를 강렬하고 소란스럽게
            전달하는 것보다는 차분하고 조용한 방식으로 간결하게 전달하는 방법에
            대한 고민을 하고 있기 때문입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
