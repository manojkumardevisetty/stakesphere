
const FooterButton = (props:any) => {
    const {url,head,subHead,index}=props

    const attributes =
    head === "Twitter" ? { href: "https://twitter.com/stakesphere" ,target:"_blank" } :
    head === "Medium" ? { href: "https://stakesphere.medium.com/ " ,target:"_blank" } :
    {href:"mailto:info@stakeshere.io", target:"_blank"};
    // Contact Us
  return (
    <a {...attributes} className={`${index===2 && `md:hidden`}`}>
      <div data-aos="zoom-in" data-aos-delay={`${index === 0 ? 0 : index * 300}`} role="button" className="flex bg-secondary rounded-[43px] px-4 py-2 gap-4">
       <div className="w-[55px] bg-primary rounded-[100%] relative h-[55px]">
            <img src={url} className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"/>
      </div>
        <div className="flex flex-col justify-around  items-start text-primary font-grotesk tracking-[1.11px]">
            <p className="font-bold text-xl">{head}</p>
            <p className="font-normal text-[15px] leading-[23.14px]">{subHead}</p>
        </div>

    </div>

    </a>
    
  )
}

export default FooterButton
