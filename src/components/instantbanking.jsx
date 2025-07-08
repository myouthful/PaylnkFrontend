import React, { useState, useEffect } from "react";
import coverimageone from "../assets/images/coverimageone.png";
import coverimagemobile from "../assets/images/coverimagemobile.png";
import { Link } from "react-router-dom";

function InstantBanking() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1200);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = isDesktop ? coverimageone : coverimagemobile;
  const height = isDesktop ? 708 : 743;

  return (
    <div className="w-screen h-[743px] bg-textblack ">
      <Link to="/signup">
        <img
          src={imageSrc}
          alt="cover"
          className="w-cover"
          style={{
            height: `${height}px`,
            objectFit: "cover",
            display: "block",
          }}
        />
      </Link>
    </div>
  );
}

export default InstantBanking;
