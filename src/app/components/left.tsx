import { color } from "framer-motion";
import { Text } from "@visx/text";

export const LeftGraphic = (params: { team: any; bestOf: any, homeYvalue: any }) => {
  let colorSet = {
    team_back: "#858585",
    score_back: "#D9D9D9",
    img: "/cropped/ATL.png",
    text: "#000000",
  };

  let team = params! ? params.team : null;
  if (team) {
    colorSet.team_back = team[0].base;
    colorSet.score_back = team[0].light;
    colorSet.img = "/cropped/" + team[0].abbreviation + ".png";
    colorSet.text = team[0].text;
  }

  let bestOf = params! ? params.bestOf : 1;

  let homeYvalue = params! ? params.homeYvalue/100 : 0;
  return (
    <>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={473}
    height={74}
    fill="none"
  >
    <mask
      id="a"
      width={150}
      height={65}
      x={322}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#000"
        d="m468 1 4 65H354.5l-3-2-16-18-7-13-5.5-16-1-16h146Z"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="url(#b)"
        d="M0 0h154v157H0z"
        transform="matrix(-1 0 0 1 474 -45)"
      />
    </g>
    <path
      fill={colorSet.team_back}
      d="M317.5 1H0c4.5 19.5 29.5 57 46 65h306.5c-9-10.5-40-51.5-35-65Z"
    />
    <path
      fill="url(#c)"
      fillOpacity={0.5}
      d="M317.5 1H0c4.5 19.5 29.5 57 46 65h306.5c-9-10.5-40-51.5-35-65Z"
    />
    <path fill={colorSet.score_back} d="M331 46H163c-2 10.5 12 20.5 20 20h168l-20-20Z" />
    <path
      fill="url(#d)"
      fillOpacity={0.4}
      d="M331 46H163c-2 10.5 12 20.5 20 20h168l-20-20Z"
    />
    <g filter="url(#e)">
      <path
        fill="#454545"
        d="M323 1h-2c-2.5 19 9.084 45.423 32 65h3c-24.118-24.026-32-37.5-33-65Z"
      />
    </g>
    <g filter="url(#f)">
      <path
        fill="#fff"
        d="M321 1h-5c2.098 31.87 10.584 45.423 33.5 65h3.5c-24.118-24.026-31.667-38.194-32-65Z"
      />
    </g>
    <path stroke="#fff" strokeWidth={2} d="m472 66-4-65" />
    <path fill={bestOf >= 7 ? "#000000" : "none"} d="M189 53h28v5h-28z" />
        <path fill={bestOf >= 5 ? "#000000" : "none"} d="M222 53h28v5h-28z" />
        <path fill={bestOf >= 3 ? "#000000" : "none"} d="M255 53h28v5h-28z" />
        <path fill={bestOf >= 1 ? "#000000" : "none"} d="M288 53h28v5h-28z" />
        
        <Text
          x={305}
          y={32}
          width={300}
          textAnchor="end"
          style={{
            fontWeight: 700,
            fill: colorSet.text,
            fontSize: "1.5rem",
          }}
        >
          {team[0].name}
        </Text>
    <defs>
      <linearGradient
        id="c"
        x1={470}
        x2={0}
        y1={33}
        y2={33}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={343.5}
        x2={163}
        y1={56}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <filter
        id="e"
        width={43.335}
        height={73}
        x={316.665}
        y={1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_10_2"
          result="shape"
        />
      </filter>
      <filter
        id="f"
        width={45}
        height={73}
        x={312}
        y={1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_10_2"
          result="shape"
        />
      </filter>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#g" transform={ "matrix(.00204 0 0 .002 -.01 "+ homeYvalue + ")"} />
      </pattern>
      <image
        xlinkHref={colorSet.img}
        id="g"
        width={500}
        height={500}
      />
    </defs>
  </svg>
    </>
  );
};
