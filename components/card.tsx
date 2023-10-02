import Button from './Button'

const Card = (props:any) => {
    const {url,title,desc,perc,price,month,card,id}=props
    console.log(id===card,'cardsssss',id,card);
    
  return (
    <div    className={` ${id!==2 ? 'pointer-events-none blur-md   box':'border-[1.874px] border-secondary rounded-[29px] pb-2 inset-0 bg-[#00ffe0] bg-opacity-10'}  duration-300 flex flex-col  pt-5 items-center w-full  gap-5 `}>
         <img data-aos="flip-right" src={url} className='w-[89px] h-[89px]'/>
         <h3>{title}</h3>
         <p className='text-center font-light text-[14px] w-[60%]'>{desc}</p>
         <div className='flex'>
            <div className='flex flex-col border-r-2 border-black px-4 '>
                <p>{perc}</p>
                <p className='flex'>{month} <span className='ml-1'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5723 12.1125H8.88094V8.18662H7.5723V12.1125ZM8.22662 6.87798C8.41201 6.87798 8.56752 6.81516 8.69315 6.68953C8.81878 6.5639 8.88138 6.40861 8.88094 6.22366C8.88094 6.03826 8.81813 5.88275 8.6925 5.75712C8.56687 5.6315 8.41158 5.5689 8.22662 5.56933C8.04123 5.56933 7.88572 5.63215 7.76009 5.75778C7.63446 5.88341 7.57186 6.0387 7.5723 6.22366C7.5723 6.40905 7.63511 6.56456 7.76074 6.69019C7.88637 6.81582 8.04167 6.87841 8.22662 6.87798ZM8.22662 15.3841C7.32148 15.3841 6.47086 15.2123 5.67477 14.8685C4.87868 14.5248 4.18619 14.0587 3.5973 13.4703C3.00841 12.8814 2.54232 12.1889 2.19902 11.3928C1.85572 10.5967 1.68385 9.74608 1.68341 8.84094C1.68341 7.9358 1.85528 7.08518 2.19902 6.28909C2.54275 5.493 3.00885 4.80051 3.5973 4.21162C4.18619 3.62273 4.87868 3.15663 5.67477 2.81333C6.47086 2.47003 7.32148 2.29817 8.22662 2.29773C9.13176 2.29773 9.98238 2.4696 10.7785 2.81333C11.5746 3.15707 12.2671 3.62317 12.8559 4.21162C13.4448 4.80051 13.9111 5.493 14.2549 6.28909C14.5986 7.08518 14.7703 7.9358 14.7698 8.84094C14.7698 9.74608 14.598 10.5967 14.2542 11.3928C13.9105 12.1889 13.4444 12.8814 12.8559 13.4703C12.2671 14.0591 11.5746 14.5255 10.7785 14.8692C9.98238 15.2129 9.13176 15.3846 8.22662 15.3841Z" fill="black"/>
</svg></span></p>
            </div>
            <div className='flex flex-col px-4'>
            <p>${price}</p>
                <p>Staked</p>
            </div>
         </div>
         <div className='flex gap-2'>
            <Button height='py-[12px]' width='z-50 relative px-[15px] md:px-[30px] rounded-[39px]' textColor='bg-primary font-grotesk text-[10px] font-bold text-white' text='LEARN MORE'/>
            <Button height='py-[12px]' width='px-[15px] z-50 relative md:px-[30px] rounded-[39px]' textColor='bg-secondary font-grotesk text-[10px] font-bold text-black' text='STAKE NOW'/>
         </div>
        </div>
  )
}

export default Card
