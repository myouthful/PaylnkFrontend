import facebook from "../assets/icons/socialmedia/facebook.png";
import instagram from "../assets/icons/socialmedia/instagram.png";
import linkedin from "../assets/icons/socialmedia/linkedin.png";
import twitter from "../assets/icons/socialmedia/twitter.png";
import appstoredownload from "../assets/images/appstoredownload.png";
import googleplaydownload from "../assets/images/googleplaydownload.png";
import React, { useState, useEffect } from "react";

function UsefulLink() {
  return (
    <nav className="flex flex-col gap-[16px]">
      <p className="font-mulish font-bold text-[16px] text-white">
        Useful Links
      </p>
      <ul className="font-poppins font-normal text-[14px] text-white flex flex-col gap-[6px] w-fit h-fit list-none ">
        <li>About us</li>
        <li>Payment & Transfer</li>
        <li>Blog</li>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
        {/* <li>Track Order</li>
        <li>Blog</li> */}
      </ul>
    </nav>
  );
}

function Shop() {
  return (
    <nav className="flex flex-col gap-[16px]">
      <p className="font-mulish font-bold text-[16px] text-white">Contact Us</p>
      <ul className="font-poppins font-normal text-[14px] text-white flex flex-col gap-[6px] w-fit h-fit list-none ">
        <li>+234 0000 0000</li>
        <li>+234 0000 0900</li>
        {/* <li>Office Location</li> */}
        {/* <li>Outdoor Furniture</li>
        <li>Kitchen Furniture</li> */}
        {/* <li>Afilliate Program</li> */}
      </ul>
    </nav>
  );
}

function Legal() {
  return (
    <nav className="flex flex-col gap-[16px]">
      {/* <p className="font-mulish font-bold text-[16px] text-white">Legal </p> */}
      <ul className="font-poppins font-normal text-[14px] text-white flex flex-col gap-[6px] w-fit h-fit list-none ">
        <li>support@paylynkd.com</li>
        {/* <li>Shipping Delivery</li>
        <li>Return Policy</li>
        <li>After Sales Support</li> */}
        <li>info@paylynkd.com</li>
        {/* <li>Contact Us</li> */}
      </ul>
    </nav>
  );
}

function Epay() {
  return (
    <nav className="w-[300px] flex flex-col gap-[9px]">
      <p className="font-mulish font-bold text-textred text-[24px] ">Epay</p>
      <p className="w-[300px] min-[1200px]:w-[295px] text-white text-[15px] min-[1200px]:text-[15px] ">
        Empowering Communities through technology and innovation
      </p>
    </nav>
  );
}

function SocialMedia() {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div className="flex items-center gap-[4px] min-[1200px]:gap-[10px] w-fit h-fit ">
        <img
          className="block w-[10.5px] h-[20px] "
          src={facebook}
          alt="facebook icon"
        />
        <img
          className="block w-[24.07] h-[19.57px] "
          src={twitter}
          alt="twitter icon"
        />
        <img
          className="block w-[20px] h-[20px] "
          src={instagram}
          alt="instagram icon"
        />
        <img
          className="block w-[20px] h-[24px] "
          src={linkedin}
          alt="linkedin icon"
        />
      </div>
      <p className="font-mulish font-normal text-[14px] text-white ">
        © 2025 Epay. All rights reserved.
      </p>
    </div>
  );
}

function FooterDesktop() {
  return (
    <footer className="w-screen h-[550px] pt-[140px] bg-textblack   flex flex-col gap-[50px] ">
      <div className=" flex items-start justify-around mb-[20px] ">
        <Epay />
        <Shop />
        <UsefulLink />
        <Legal />

        <div className="flex w-fit h-fit items-center justify-center gap-[14px] ">
          <div className="w-[120px] h-[40px] ">
            <img
              src={googleplaydownload}
              alt="download mobile app from the googleplay store for android users icon"
            />
          </div>
          <div className="w-[120px] h-[40px] ">
            <img
              src={appstoredownload}
              alt="download mobile app from the app store for IOS users icon"
            />
          </div>
        </div>
      </div>

      <SocialMedia />
    </footer>
  );
}

function FooterMobile() {
  return (
    <footer className="w-screen h-fit  bg-textblack flex flex-col items-center    gap-[30px] py-[30px] px-[20px]">
      <Epay />
      <div className="flex gap-[29px] mt-[20px]  ">
        <UsefulLink />
        <div className="flex flex-col gap-[15px] ">
          <Shop />
          <Legal />
        </div>
      </div>
      <div className="flex  mt-[20px] justify-around  ">
        <Legal />
      </div>
      <div className="flex w-fit h-fit items-center justify-center gap-[14px] ">
        <div className="w-[120px] h-[40px] ">
          <img
            src={googleplaydownload}
            alt="download mobile app from the googleplay store for android users icon"
          />
        </div>
        <div className="w-[120px] h-[40px] ">
          <img
            src={appstoredownload}
            alt="download mobile app from the app store for IOS users icon"
          />
        </div>
      </div>
      <SocialMedia />
    </footer>
  );
}

function ResponsiveFooter() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1200);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
}

export default ResponsiveFooter;
