/**
 * @component SimpleWayToGetStartedText
 * This component displays a header and subtext with specified styles.
 * @param {string} gap - The gap between the elements in the component
 * @param {string} Headerfontfamily - Font family for the header text
 * @param {string} Headerfontweight - Font weight for the header text
 * @param {string} Headertextsize - Text size for the header text
 * @param {string} subtextfontfamily - Font family for the subtext
 * @param {string} subtextfontweight - Font weight for the subtext 
 * @param {string} subtexttextsize - Text size for the subtext
 * @returns {JSX.Element} - A JSX element containing the header and subtext.
 */


function SimpleWayToGetStartedText() {
  return (
    <div className={`w-fit mt-[30px] h-fit flex-col flex gap-[15px] items-center`}>
      <p
        className= {` font-poppins  text-textprimary font-bold text-[32px] `}
      >
        Simple to Get Started
      </p>
      <p
        className={` font-popins  text-textprimary text-center font-semibold text-[19px] `}
      >
        {" "}
        Your Trusted Partner For Secure,Smart,Seamless,Online Banking
      </p>
    </div>
  );
}


export default SimpleWayToGetStartedText;