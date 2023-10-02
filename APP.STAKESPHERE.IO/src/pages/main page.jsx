// import React from "react";

// import { Tooltip } from 'react-tooltip'


// function MainPage() {
//   return (
//     <div className=" z-50 font-grotesk font-bold text-center ">
      
//       <div className="flex flex-col justify-center items-center mt-10 leading-9">
      
//         <div className="h-max md:w-[425px] w-fit bg-white relative z-50 flex flex-col p-7 items-start box gap-6 ">
//           <div className="text-xl font-normal">
//             <span className="px-3 py-2 bg-[#00FFE0] rounded-[39px]">Stake</span>
//             <span className="ml-3 p-3">Unstake</span>
//           </div>
       
//           <div  className=" w-full flex  relative flex-col items-start cursor-not-allowed">
//             <div>
//               Stake Amount <span className="font-light">(FIL)</span>
//             </div>
// <Tooltip id="my-tooltip1"/>
//             <div data-tooltip-id="my-tooltip1" data-tooltip-content="Connect Wallet" className="h-[43px] w-full rounded-[39px] border-[#00FFE0] flex justify-between items-center px-4 py-6 border-2 mt-2">
//               <span className="font-normal">0.0</span>
//               <span>MAX</span>
//             </div>
//           </div>
//           <div className=" w-full flex  relative cursor-not-allowed flex-col items-start">
//             <div>
//               Staking Period <span className="font-light">(in Months)</span>
//             </div>
//             <Tooltip id="my-tooltip1"/>

//             <div data-tooltip-id="my-tooltip1" data-tooltip-content="Connect Wallet" className="h-[43px] w-full rounded-[39px] border-[#00FFE0]  flex justify-between items-center px-4 py-6 border-2 mt-2">
//               <span className="font-normal">0</span>
//               <span>MAX</span>
//             </div>

//           </div>
         
//         </div>


//       </div>
//     </div>
//   );
// }

// export default MainPage;
import React from "react";
import sphere from "../Assetsss/sphere (2).png";
import sphere2 from "../Assetsss/sphere (3).png";
import star1 from "../Assetsss/star-img.png";
import star2 from "../Assetsss/star-img (1).png";
import star3 from "../Assetsss/star-img (2).png";
import { Tooltip } from 'react-tooltip'
import Home from "./Home";


function MainPage() {
  return (
    <div className="w-screen relative h-screen z-50 font-grotesk font-bold text-center ">
      <img className="absolute bottom-0 left-0 z-10 " src={sphere} alt="pic1" />
      <img className="absolute top-0 right-0" src={sphere2}  alt="pic2"/>
      <img className="absolute bottom-[20%] right-[5%]" src={star1}  alt="pic3"/>
      <img className="absolute bottom-[8%] left-[20%]" src={star2} alt="pic4" />
      <img className="absolute top-[10%] left-[10%]" src={star3} alt="pic5" />
      <div className="flex flex-col justify-center items-center mt-10 leading-9">
        <p className="font-medium text-4xl">FileCoin Staking</p>
        <p className="font-normal text-xl mt-3 mb-5 relative z-20">
          Unrivaled FileCoin staking experience
        </p>
        <div className="h-max md:w-[425px] w-fit bg-white relative z-50 flex flex-col p-7 items-start box gap-6 ">
          <div className="text-xl font-normal">
            <span className="px-3 py-2 bg-[#00FFE0] rounded-[39px]">Stake</span>
            <span className="ml-3 p-3">Unstake</span>
          </div>
       
          <div  className=" w-full flex  relative flex-col items-start cursor-not-allowed">
            <div>
              Stake Amount <span className="font-light">(FIL)</span>
            </div>
        <Tooltip id="my-tooltip1"/>
            <div data-tooltip-id="my-tooltip1" data-tooltip-content="Connect Wallet" className="h-[43px] w-full rounded-[39px] border-[#00FFE0] flex justify-between items-center px-4 py-6 border-2 mt-2">
              <span className="font-normal">0.0</span>
              <span>MAX</span>
            </div>
          </div>
          <div className=" w-full flex  relative cursor-not-allowed flex-col items-start">
            <div>
              Staking Period <span className="font-light">(in Months)</span>
            </div>
            <Tooltip id="my-tooltip1"/>

            <div data-tooltip-id="my-tooltip1" data-tooltip-content="Connect Wallet" className="h-[43px] w-full rounded-[39px] border-[#00FFE0]  flex justify-between items-center px-4 py-6 border-2 mt-2">
              <span className="font-normal">0</span>
              <span>MAX</span>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default MainPage;
