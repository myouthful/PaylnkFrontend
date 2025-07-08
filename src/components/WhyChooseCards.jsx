/**
 * @component WhyChooseCard
 * Following the design file the width and height is
 * defined based on the padding from top, left and right and the box
 * containing the contents in this case is the CardContents component
 * @param {string} paddingLeft - Padding from the left side (example: 'px-4')
 * @param {string} paddingRight - Padding from the right side (example: 'px-4')
 * @param {string} paddingTop - Padding from the top side (example: 'pt-4')
 * @param {string} borderRadius - Border radius of the WhyChooseCard (example: 'rounded-lg', rounded-[3px])
 */
function WhyChooseCard({
  paddingLeft,
  paddingRight,
  paddingTop,
  borderRadius,
  gap,
  header,
  subtext,
  iconheight,
  iconwitdth,
  imgsrc,
  imgdsc,
  imgwidth,
  imgheight,
  Headerfontfamily,
  Headerfontweight,
  Headertextsize,
  subtextfontfamily,
  subtextfontweight,
  subtexttextsize,
}) {
  return (
    <div
      className={`
        w-fit h-fit 
        pt-[15px] px-[12px] 
         rounded-[10px] 
        bg-white drop-shadow-[0px_4px_10px_0px_rgba(0,0,,0.09)]
        `}
    >
      <CardContents
        gap={gap}
        header={header}
        subtext={subtext}
        iconheight={iconheight}
        iconwitdth={iconwitdth}
        imgsrc={imgsrc}
        imgdsc={imgdsc}
        imgwidth={imgwidth}
        imgheight={imgheight}
        Headerfontfamily={Headerfontfamily}
        Headerfontweight={Headerfontweight}
        Headertextsize={Headertextsize}
        subtextfontfamily={subtextfontfamily}
        subtextfontweight={subtextfontweight}
        subtexttextsize={subtexttextsize}
      />
    </div>
  );
}

/**
 * @component CardContents
 * This component is used to display the main content of the WhyChooseCard.
 * It contains an icon, a header, and a subtext.
 * @param {string} gap - Gap between the elements (example: 'gap-4')
 * @param {string} header - Header text to be displayed
 * @param {string} subtext - Subtext to be displayed
 * @param {string} iconheight - Height of the icon (example: 'h-6')
 * @param {string} iconwitdth - Width of the icon (example: 'w-6')
 * @param {string} imgsrc - Source of the image to be displayed
 * @param {string} imgdsc - Description of the image for accessibility
 * @param {string} imgwidth - Width of the image (example: 'w-6')
 * @param {string} imgheight - Height of the image (example: 'h-6')
 * @param {string} Headerfontfamily - Font family for the header text (example: 'font-bold')
 * @param {string} Headerfontweight - Font weight for the header text (example: 'font-semibold')
 * @param {string} Headertextsize - Text size for the header (example: 'text-lg')
 * @param {string} subtextfontfamily - Font family for the subtext (example: 'font-normal')
 * @param {string} subtextfontweight - Font weight for the subtext (example: 'font-light')
 * @param {string} subtexttextsize - Text size for the subtext (example: 'text-sm')
 * @param {string} headertextwidth - Width of the header text (example: 'w-full')
 * @param {string} subtextwidth - Width of the subtext (example: 'w-full')
 * @returns jsx elemenent
 */

function CardContents({
  gap,
  header,
  subtext,
  iconheight,
  iconwitdth,
  imgsrc,
  imgdsc,
  imgwidth,
  imgheight,
  Headerfontfamily,
  Headerfontweight,
  Headertextsize,
  subtextfontfamily,
  subtextfontweight,
  subtexttextsize,
  headertextwidth,
  subtextwidth
}) {
  return (
    <div className={`w-fit h-fit gap-[${gap}] flex flex-col items-center `}>
      <Icon
        iconheight={iconheight}
        iconwitdth={iconwitdth}
        imgdsc={imgdsc}
        imgsrc={imgsrc}
        imgheight={imgheight}
        imgwidth={imgwidth}
      />
      <p
        className={`${Headerfontfamily} ${headertextwidth} text-textprimary ${Headerfontweight} ${Headertextsize} `}
      >
        {header}
      </p>
      <p
        className={`${subtextfontfamily} ${subtextwidth} w-[300px] text-textsecondary ${subtextfontweight} ${subtexttextsize} `}
      >
        {subtext}
      </p>
    </div>
  );
}

/**
 * @component Icon
 * This component is used to display an icon with a specified height and width.
 * It takes the image source, description, and dimensions as props.
 * @param {string} iconheight - Height of the icon (example: 'h-6')
 * @param {string} iconwitdth - Width of the icon (example: 'w-6')
 * @param {string} imgsrc - Source of the image to be displayed
 * @param {string} imgdsc - Description of the image for accessibility
 * @param {string} imgwidth - Width of the image (example: 'w-6')
 * @param {string} imgheight - Height of the image (example: 'h-6')
 */

function Icon({ iconheight, iconwitdth, imgsrc, imgdsc, imgwidth, imgheight }) {
  return (
    <div
      className={`${imgwidth} ${imgheight} rounded-md bg-electricIndigo flex-col flex items-center justify-center`}
    >
      <img
        src={imgsrc}
        className={`${iconwitdth} ${iconheight} `}
        alt={imgdsc}
      />
    </div>
  );
}

export default WhyChooseCard;
