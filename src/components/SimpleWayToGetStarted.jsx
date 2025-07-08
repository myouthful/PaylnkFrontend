/**
 * @component SimpleWayToGetStartedCard
 * Following the design file the width and height is
 * defined based on the padding from top, left and right and the box
 * containing the contents in this case is the CardContents component
 * @param {string} paddingLeft - Padding from the left side (example: 'px-4')
 * @param {string} paddingRight - Padding from the right side (example: 'px-4')
 * @param {string} paddingTop - Padding from the top side (example: 'pt-4')
 * @param {string} borderRadius - Border radius of the SimpleWayToGetStartedCard (example: 'rounded-lg', rounded-[3px])
 */
function SimpleWayToGetStartedCard({
  paddingLeft,
  paddingRight,
  paddingTop,
  borderRadius,
  gap,
  header,
  subtext,
  icohWidth,
  iconHeight,
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
        ${paddingLeft} ${paddingRight}
        ${paddingTop} rounded-[${borderRadius}]
        drop-shadow-[0px_4px_10px_0px_rgba(0,0,,0.09)],4px_0px_10px_0px_rgba(0,0,0,0.09)
        `}
    >
      <CardContents
        gap={gap}
        header={header}
        subtext={subtext}
        icohWidth={icohWidth}
        iconHeight={iconHeight}
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
 * This component is used to display the main content of the SimpleWayToGetStartedCard.
 * It contains an icon, a header, and a subtext.
 * @param {string} gap - Gap between the elements (example: 'gap-4')
 * @param {string} header - Header text to be displayed
 * @param {string} subtext - Subtext to be displayed
 * @param {string} icohWidth - Height of the icon (example: 'h-6')
 * @param {string} iconHeight - Width of the icon (example: 'w-6')
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
 * @param {string} subtextwidth - Width of the subtext (example: 'w-full')
 * @param {string} headertextwidth - Width of the header text (example: 'w-full')
 * @returns jsx elemenent
 */

function CardContents({
  gap,
  header,
  subtext,
  icohWidth,
  iconHeight,
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
    <div className={`w-fit h-fit gap-[${gap}] flex flex-col items-center `}>
      <Icon
        icohWidth={icohWidth}
        iconHeight={iconHeight}
        imgdsc={imgdsc}
        imgsrc={imgsrc}
        imgheight={imgheight}
        imgwidth={imgwidth}
      />
      <p
        className={`${Headerfontfamily} text-textprimary ${Headerfontweight} ${Headertextsize} `}
      >
        {header}
      </p>
      <p
        className={`${subtextfontfamily} text-textsecondary ${subtextfontweight} ${subtexttextsize} `}
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
 * @param {string} icohWidth - Height of the icon (example: 'h-6')
 * @param {string} iconHeight - Width of the icon (example: 'w-6')
 * @param {string} imgsrc - Source of the image to be displayed
 * @param {string} imgdsc - Description of the image for accessibility
 * @param {string} imgwidth - Width of the image (example: 'w-6')
 * @param {string} imgheight - Height of the image (example: 'h-6')
 */

function Image({
  icohWidth,
  iconHeight,
  imgsrc,
  imgdsc,
  imgwidth,
  imgheight,
}) {
  return (
    <div
      className={`${imgwidth} ${imgheight} flex-col flex items-center justify-center`}
    >
      <img
        src={imgsrc}
        className={`${iconHeight} ${icohWidth} `}
        alt={imgdsc}
      />
    </div>
  );
}

export default SimpleWayToGetStartedCard;
