import main from "../assets/main.png";
import sphere1 from "../assets/sphere.png";
import sphere2 from "../assets/sphere (1).png"
import mobImage from "../assets/mobAbtImage.png"
const AboutUs = () => {
  return (
    <div id="About" className="flex flex-col items-center bg-blogsBg md:items-start md:flex-row mt-[5%] justify-between relative overflow-x-hidden ">
      <div className="mt-[8%] flex flex-col font-grotesk lg:px-[10%] xl:px-[12%] md:text-left text-center px-[5%] gap-3 md:w-[50%]">
        <p className="font-medium text-4xl">Why Stake with Filecoin?</p>
        <p className="font-normal lg:text-xl text-base text-left">
        Staking your FIL tokens is a way to actively participate in securing and maintaining
the Filecoin network. As a staker, you help to validate transactions and ensure the integrity
of the network while earning rewards for your contributions. Staking is not only financially
rewarding but also reinforces the decentralized nature of Filecoin by involving token holders
in the consensus process
        </p>
      </div>
      <img data-aos="zoom-in-up" src={mobImage} alt="Mobile About Us Image" className="w-full h-auto md:hidden"/>
      <div data-aos="zoom-in-up" className="hidden md:block  relative">
      <img src={main} className=" w-full h-auto" />
      <img src={sphere1} className=" absolute top-0 md:left-[5%] lg:left-[30%]" />
      <img src={sphere2} className=" absolute bottom-0 right-0" />

      </div>
      
    </div>
  );
};

export default AboutUs;
