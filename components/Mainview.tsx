import Button from "./Button"
import image from "../assets/Group 39.png"
import Navbar from "./Navbar"



const MainView = () => {
  return (
    <div className='bg-view  bg-no-repeat bg-cover flex flex-col  bg-center  items-center bg-primary w-full h-max'>
      <Navbar/>
    
 <div className="  mt-[11%] md:grid md:grid-cols-3 md:place-items-center w-[90%] justify-between hidden">
<div className="font-grotesk lg:text-xl text-base flex  items-center gap-5 text-left p-5 ">
<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2426 1.75736C7.89949 -0.585786 4.10051 -0.585786 1.75736 1.75736C-0.585786 4.10051 -0.585786 7.89949 1.75736 10.2426L10.2426 1.75736ZM79.5 85.5C82.8137 85.5 85.5 82.8137 85.5 79.5L85.5 25.5C85.5 22.1863 82.8137 19.5 79.5 19.5C76.1863 19.5 73.5 22.1863 73.5 25.5L73.5 73.5L25.5 73.5C22.1863 73.5 19.5 76.1863 19.5 79.5C19.5 82.8137 22.1863 85.5 25.5 85.5L79.5 85.5ZM1.75736 10.2426L75.2574 83.7427L83.7427 75.2574L10.2426 1.75736L1.75736 10.2426Z" fill="#59FDE9"/>
</svg>
<p className="text-secondary">
  <span className="font-bold block ">Enterprise staking</span>
  Stake Secure<br/> Prosper Sure
</p>
</div>
<div className="font-inter font-bold text-center lg:text-7xl text-3xl  text-secondary p-5">
  <div className="lg:leading-[96px] leading-[60px]">
  START
  <br/>
  STAKING
  <br/>
  TODAY
  <br/>
  </div>
  <Button height="py-[13px]" width="px-[33px] rounded-[43px]" bgColor="bg-secondary" textColor="text-primary text-[10px] font-grotesk" text="STAKE NOW"  />
 
</div>
<div className="font-grotesk lg:text-xl text-base flex  items-center gap-5 text-left p-5">
<svg width="88" height="155" viewBox="0 0 88 155" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.5" cx="44" cy="44" r="41" stroke="#00FFE0" stroke-width="6"/>
<circle opacity="0.9" cx="44" cy="71" r="41" stroke="#00FFE0" stroke-width="6"/>
<circle opacity="0.5" cx="44" cy="111" r="41" stroke="#00FFE0" stroke-width="6"/>
</svg>
<p className="text-secondary">
  <span className="font-bold block ">VC stake with <span className="font-bold"></span></span> Confidence Reap 
  <br/> the Rewards
</p>
</div>
</div>


<div className="  mt-[2%] flex flex-col items-center w-[90%] justify-around md:hidden">
<div className="font-inter font-black text-center lg:text-7xl text-6xl  text-secondary p-5">
  <div className="p-5 leading-[77px] tracking-[1.13px]">
  START
  <br/>
  STAKING
  <br/>
  TODAY
  <br/>
  </div>
 
</div>
<div className="font-grotesk lg:text-xl text-base flex  items-center gap-5 text-left p-5 ">
<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2426 1.75736C7.89949 -0.585786 4.10051 -0.585786 1.75736 1.75736C-0.585786 4.10051 -0.585786 7.89949 1.75736 10.2426L10.2426 1.75736ZM79.5 85.5C82.8137 85.5 85.5 82.8137 85.5 79.5L85.5 25.5C85.5 22.1863 82.8137 19.5 79.5 19.5C76.1863 19.5 73.5 22.1863 73.5 25.5L73.5 73.5L25.5 73.5C22.1863 73.5 19.5 76.1863 19.5 79.5C19.5 82.8137 22.1863 85.5 25.5 85.5L79.5 85.5ZM1.75736 10.2426L75.2574 83.7427L83.7427 75.2574L10.2426 1.75736L1.75736 10.2426Z" fill="#59FDE9"/>
</svg>
<p className="text-secondary">
  <span className="font-bold block ">Enterprise staking</span>
  Stake Secure<br/> Prosper Sure
</p>
</div>

<div className="font-grotesk lg:text-xl text-base flex  items-center gap-5 text-left p-5">
<svg width="88" height="155" viewBox="0 0 88 155" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.5" cx="44" cy="44" r="41" stroke="#00FFE0" stroke-width="6"/>
<circle opacity="0.9" cx="44" cy="71" r="41" stroke="#00FFE0" stroke-width="6"/>
<circle opacity="0.5" cx="44" cy="111" r="41" stroke="#00FFE0" stroke-width="6"/>
</svg>
<p className="text-secondary">
  <span className="font-bold block ">VC stake with <span className="font-bold"></span></span> Confidence 
  Reap<br/> the Rewards
</p>
</div>
</div>

 <div data-aos="fade-up"
     data-aos-duration="3000">
  <img className="" src={image} alt="heroImage"/>

 </div>

     
    </div>
  )
}

export default MainView
