import React, { useState, useEffect } from "react";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";

function ResponsiveCardImage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1200);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = isDesktop ? card1 : card2;
  const height = isDesktop ? 708 : 743;

  return (
    <img
      src={imageSrc}
      alt="card"
      className="w-full "
      style={{
        height: `${height}px`,
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}

export default ResponsiveCardImage;