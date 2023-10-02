
import { useState } from 'react'
import logoName from '../assets/Group 13.png'
import Button from './Button'
import pdfFile from '../assets/stake.pdf'
const Navbar = () => {
  

    const navItems:string[]=['SP','Whitepaper','Blog','About','Contact','Docs']
    const [showNav,setShowNav]=useState<boolean>(false)
const scrollIntoViewPort =(id:string)=>{
  setShowNav(false)
  let elementToView=document.getElementById(id)
  elementToView?.scrollIntoView({behavior:"smooth"})
}

  return (
    <nav className="  md:h-20 cursor-pointer flex justify-between w-screen items-center font-grotesk font-bold">
    <div className="bg-secondary py-2 md:py-6 lg:px-6 px-3  hidden md:flex rounded-br-[21px]  ">
          <img src={logoName}  className='h-0 w-0 md:h-[30px] md:w-[240px] lg:w-[220px] lg:h-[40px]'/>
          
   </div>
   <div className='md:hidden flex bg-secondary rounded-br-[21px] px-6 py-4 '>
   <div className='flex items-center text-[#0075FF]'>
          <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1_147)">
<circle cx="18.2852" cy="19.1561" r="18.2852" fill="url(#paint0_radial_1_147)"/>
</g>
<circle cx="18.2852" cy="19.1561" r="17.7628" stroke="url(#paint1_linear_1_147)" stroke-width="1.04487" stroke-linejoin="round"/>
<path d="M30.8887 25.4859C30.8887 26.2055 30.5488 26.8983 29.9191 27.5364C29.289 28.1748 28.3729 28.7538 27.2341 29.2418C24.9566 30.2179 21.8043 30.8237 18.3178 30.8237C14.8312 30.8237 11.6789 30.2179 9.40148 29.2418C8.26261 28.7538 7.34653 28.1748 6.71643 27.5364C6.08671 26.8983 5.7468 26.2055 5.7468 25.4859C5.7468 24.7663 6.08671 24.0735 6.71643 23.4355C7.34653 22.797 8.26261 22.2181 9.40148 21.73C11.6789 20.7539 14.8312 20.1481 18.3178 20.1481C21.8043 20.1481 24.9566 20.7539 27.2341 21.73C28.3729 22.2181 29.289 22.797 29.9191 23.4355C30.5488 24.0735 30.8887 24.7663 30.8887 25.4859Z" fill="url(#paint2_linear_1_147)" stroke="url(#paint3_linear_1_147)" stroke-width="0.174145"/>
<path d="M30.8887 18.7694C30.8887 19.4889 30.5488 20.1817 29.9191 20.8198C29.289 21.4583 28.3729 22.0372 27.2341 22.5253C24.9566 23.5013 21.8043 24.1072 18.3178 24.1072C14.8312 24.1072 11.6789 23.5013 9.40148 22.5253C8.26261 22.0372 7.34653 21.4583 6.71643 20.8198C6.08671 20.1817 5.7468 19.4889 5.7468 18.7694C5.7468 18.0498 6.08671 17.357 6.71643 16.7189C7.34653 16.0805 8.26261 15.5015 9.40148 15.0134C11.6789 14.0374 14.8312 13.4316 18.3178 13.4316C21.8043 13.4316 24.9566 14.0374 27.2341 15.0134C28.3729 15.5015 29.289 16.0805 29.9191 16.7189C30.5488 17.357 30.8887 18.0498 30.8887 18.7694Z" fill="url(#paint4_linear_1_147)" stroke="url(#paint5_linear_1_147)" stroke-width="0.174145"/>
<path d="M30.8887 11.4329C30.8887 12.1525 30.5488 12.8453 29.9191 13.4834C29.289 14.1218 28.3729 14.7008 27.2341 15.1889C24.9566 16.1649 21.8043 16.7707 18.3178 16.7707C14.8312 16.7707 11.6789 16.1649 9.40148 15.1889C8.26261 14.7008 7.34653 14.1218 6.71643 13.4834C6.08671 12.8453 5.7468 12.1525 5.7468 11.4329C5.7468 10.7134 6.08671 10.0206 6.71643 9.38249C7.34653 8.74404 8.26261 8.16509 9.40148 7.677C11.6789 6.70095 14.8312 6.09513 18.3178 6.09513C21.8043 6.09513 24.9566 6.70095 27.2341 7.677C28.3729 8.16509 29.289 8.74404 29.9191 9.38249C30.5488 10.0206 30.8887 10.7134 30.8887 11.4329Z" fill="url(#paint6_linear_1_147)" stroke="url(#paint7_linear_1_147)" stroke-width="0.174145"/>
<defs>
<filter id="filter0_i_1_147" x="0" y="0.87085" width="36.5705" height="36.9188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.34829"/>
<feGaussianBlur stdDeviation="2.78632"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.218333 0 0 0 0 0.545833 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_147"/>
</filter>
<radialGradient id="paint0_radial_1_147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.2852 19.1561) rotate(90) scale(22.247)">
<stop stop-color="#0066FF"/>
<stop offset="1" stop-color="#004BBB"/>
</radialGradient>
<linearGradient id="paint1_linear_1_147" x1="18.2896" y1="21.8947" x2="17.7598" y2="37.4234" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFE0"/>
</linearGradient>
<linearGradient id="paint2_linear_1_147" x1="18.3178" y1="20.061" x2="18.3694" y2="32.4091" gradientUnits="userSpaceOnUse">
<stop stop-color="#0085FF"/>
<stop offset="1" stop-color="#0040BD"/>
</linearGradient>
<linearGradient id="paint3_linear_1_147" x1="18.3208" y1="26.2984" x2="18.2534" y2="30.9098" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFE0"/>
</linearGradient>
<linearGradient id="paint4_linear_1_147" x1="18.3178" y1="13.3445" x2="18.3178" y2="24.1942" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C2FF"/>
<stop offset="1" stop-color="#004EE7"/>
</linearGradient>
<linearGradient id="paint5_linear_1_147" x1="18.3208" y1="19.5819" x2="18.2534" y2="24.1933" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFE0"/>
</linearGradient>
<linearGradient id="paint6_linear_1_147" x1="18.3178" y1="6.00806" x2="18.2853" y2="18.5465" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFE0"/>
<stop offset="1" stop-color="#0057FF"/>
</linearGradient>
<linearGradient id="paint7_linear_1_147" x1="18.3208" y1="12.2454" x2="18.2534" y2="16.8569" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFE0"/>
</linearGradient>
</defs>
</svg><span className=' logoFontDark tracking-[2px] font-bold text-xl leading-6 pl-1'>Stake<span className=' logoFontLight tracking-[2px] font-normal text-xl leading-6'>sphere</span></span>
          </div>
          </div>

   <svg className='mx-4 md:hidden' width="30" height="30"  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=> setShowNav(!showNav)}>
<g clip-path="url(#clip0_1_9796)">
<path d="M25 21.875C25.4815 21.8752 25.9445 22.0607 26.293 22.393C26.6415 22.7253 26.8488 23.1789 26.8719 23.6599C26.895 24.1409 26.7323 24.6123 26.4173 24.9765C26.1023 25.3407 25.6593 25.5698 25.18 25.6162L25 25.625H5C4.51848 25.6248 4.05551 25.4393 3.70702 25.107C3.35853 24.7747 3.15123 24.3211 3.12809 23.8401C3.10495 23.3591 3.26774 22.8877 3.58272 22.5235C3.8977 22.1593 4.34073 21.9302 4.82 21.8838L5 21.875H25ZM25 13.125C25.4973 13.125 25.9742 13.3225 26.3258 13.6742C26.6775 14.0258 26.875 14.5027 26.875 15C26.875 15.4973 26.6775 15.9742 26.3258 16.3258C25.9742 16.6775 25.4973 16.875 25 16.875H5C4.50272 16.875 4.02581 16.6775 3.67417 16.3258C3.32254 15.9742 3.125 15.4973 3.125 15C3.125 14.5027 3.32254 14.0258 3.67417 13.6742C4.02581 13.3225 4.50272 13.125 5 13.125H25ZM25 4.375C25.4973 4.375 25.9742 4.57254 26.3258 4.92417C26.6775 5.27581 26.875 5.75272 26.875 6.25C26.875 6.74728 26.6775 7.22419 26.3258 7.57583C25.9742 7.92746 25.4973 8.125 25 8.125H5C4.50272 8.125 4.02581 7.92746 3.67417 7.57583C3.32254 7.22419 3.125 6.74728 3.125 6.25C3.125 5.75272 3.32254 5.27581 3.67417 4.92417C4.02581 4.57254 4.50272 4.375 5 4.375H25Z" fill="#00FFE0"/>
</g>
<defs>
<clipPath id="clip0_1_9796">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
   <div className=' hidden md:flex text-secondary lg:gap-10 gap-4 lg:text-sm   text-[10px]  '>
   {navItems.map((items:string)=>{ 
    return(
      <>
      {items==="Whitepaper"? <a href={pdfFile} rel="noreferrer" target='_blank'>
      {items}
    </a>:items==="SP"? <a href="https://filscan.io/en/miner/f01907556" rel="noreferrer" target='_blank'>
      {items}
      </a>:items==="Docs"? <a href="https://stakesphere-io.gitbook.io/stakesphere/" rel="noreferrer" target='_blank'>
      {items}</a>:

    <p onClick={()=>{scrollIntoViewPort(items)}}>
      {items}

    </p>
    
    }
      
      </>
    )
   })}
   </div>
   <div className='w-[20%] hidden md:block'>
<Button height='pt-[10px] pb-[10px]' width='pr-[30px] pl-[30px] rounded-[43px] lg:tracking-[1.11px] lg:leading-[23.14px]' 
      bgColor='bg-secondary' textColor='text-[#0047FF] lg:text-[10px] text-[8px]' text='LAUNCH APP'/>
   </div>

   {showNav&& <div className='fixed md:hidden top-[64px] right-8 flex flex-col justify-around text-primary font-grotesk text-base rounded-[10px] bg-secondary  w-[40%] p-5'>
    {navItems?.map((node:string)=>{
      return(

        <>
        {node==='Whitepaper'?
        <div className='p-2 w-[90%] border-b border-primary font-bold'>
        <a href={pdfFile} rel="noreferrer" target='_blank'>
        {node}
        </a></div>:
        node==='SP'?
        <div className='p-2 w-[90%] border-b border-primary font-bold'>
        <a href="https://filscan.io/en/miner/f01907556" rel="noreferrer" target='_blank'>
        {node}</a></div>:
       node==='Docs'?
       <div className='p-2 w-[90%] border-b border-primary font-bold'>
       <a href="https://stakesphere-io.gitbook.io/stakesphere/" rel="noreferrer" target='_blank'>
       {node}</a></div>:
       <div onClick={() =>scrollIntoViewPort(node)} className='p-2 w-[90%] border-b border-primary font-bold'>{node}</div>

        }
        </>
      )
    })}
    <Button width='px-[22px]' height=' py-[8px] ' textColor='text-xs font-bold mt-5 font-grotesk rounded-[28px] bg-primary text-secondary' text='LAUNCH APP' />

   </div>}
    </nav>
  )
}

export default Navbar
