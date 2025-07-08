import Header from "../components/header";
import InstantBanking from "../components/instantbanking";
import WhyChooseCard from "../components/WhyChooseCards";
import WhyChooseText from "../components/WhyChooseText";
import icon1 from "../assets/icons/pages/icon1.png";
import icon2 from "../assets/icons/pages/icon2.png";
import icon3 from "../assets/icons/pages/icon3.png";
import SimpleWayToGetStartedText from "../components/SimpleWayToGetStartedText";
import ResponsiveCardImage from "../components/imagepage";
import ResponsiveFooter from "../MiniComponents/FooterItems";

function Homepage() {
  return (
    <div className="w-screen h-full ">
      <Header />
      <InstantBanking />
      <WhyChooseText />
      <div className="w-screen mt-[90px] flex items-center justify-around ">
        <WhyChooseCard
          header="Secure Banking "
          subtext="Your Trusted Partner For Secure,Smart, And Seamless Online Banking "
          imgsrc={icon1}
          rounded="10px"
          gap="15px"
          iconheight="h-[55px]"
          iconwitdth="w-[55px]"
          imgdsc="Secure Banking Icon"
          imgwidth="w-[55px]"
          imgheight="h-[55px]"
          Headerfontfamily="font-mulish"
          Headerfontweight="font-semibold"
          subtextfontfamily="font-mulish"
          subtextfontweight="font-normal"
          subtexttextsize="text-[14px]"
        />
        <WhyChooseCard
          header="Mobile Access "
          subtext="Your Trusted Partner For Secure,Smart, And Seamless Online Banking "
          imgsrc={icon2}
          gap="15px"
          iconheight="h-[55px]"
          iconwitdth="w-[55px]"
          imgdsc="Secure Banking Icon"
          imgwidth="w-[55px]"
          imgheight="h-[55px]"
          Headerfontfamily="font-mulish"
          Headerfontweight="font-semibold"
          subtextfontfamily="font-mulish"
          subtextfontweight="font-normal"
          subtexttextsize="text-[14px]"
        />
        <WhyChooseCard
          header="Privacy Focused "
          subtext="Your Trusted Partner For Secure,Smart, And Seamless Online Banking "
          imgsrc={icon3}
          gap="15px"
          iconheight="h-[55px]"
          iconwitdth="w-[55px]"
          imgdsc="Secure Banking Icon"
          imgwidth="w-[55px]"
          imgheight="h-[55px]"
          Headerfontfamily="font-mulish"
          Headerfontweight="font-semibold"
          subtextfontfamily="font-mulish"
          subtextfontweight="font-normal"
          subtexttextsize="text-[14px]"
        />
      </div>
      <div className="w-screen bg-fadedWhite h-fit mb-[60px] flex flex-col items-center justify-center mt-[100px] ">
        <SimpleWayToGetStartedText />
        <div className="w-screen mt-[55px] mb-[50px] flex justify-around ">
          <WhyChooseCard
            header="Secure Banking "
            subtext="Your Trusted Partner For Secure,Smart, And Seamless Online Banking "
            imgsrc={icon1}
            rounded="10px"
            gap="15px"
            iconheight="h-[55px]"
            iconwitdth="w-[55px]"
            imgdsc="Secure Banking Icon"
            imgwidth="w-[55px]"
            imgheight="h-[55px]"
            Headerfontfamily="font-mulish"
            Headerfontweight="font-semibold"
            subtextfontfamily="font-mulish"
            subtextfontweight="font-normal"
            subtexttextsize="text-[14px]"
          />
          <WhyChooseCard
            header="Mobile Access "
            subtext="Your Trusted Partner For Secure,Smart, And Seamless Online Banking "
            imgsrc={icon2}
            gap="15px"
            iconheight="h-[55px]"
            iconwitdth="w-[55px]"
            imgdsc="Secure Banking Icon"
            imgwidth="w-[55px]"
            imgheight="h-[55px]"
            Headerfontfamily="font-mulish"
            Headerfontweight="font-semibold"
            subtextfontfamily="font-mulish"
            subtextfontweight="font-normal"
            subtexttextsize="text-[14px]"
          />
          <WhyChooseCard
            header="Privacy Focused "
            subtext="Your Trusted Partner For Secure,Smart, And Seamless Online Banking "
            imgsrc={icon3}
            gap="15px"
            iconheight="h-[55px]"
            iconwitdth="w-[55px]"
            imgdsc="Secure Banking Icon"
            imgwidth="w-[55px]"
            imgheight="h-[55px]"
            Headerfontfamily="font-mulish"
            Headerfontweight="font-semibold"
            subtextfontfamily="font-mulish"
            subtextfontweight="font-normal"
            subtexttextsize="text-[14px]"
          />
        </div>
      </div>
      <ResponsiveCardImage />
      <ResponsiveFooter />
    </div>
  );
}

export default Homepage;
