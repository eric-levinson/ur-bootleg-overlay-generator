import { color } from "framer-motion";
import { Text } from "@visx/text";

export const RightGraphic = (params: { team: any; bestOf: any, awayYvalue: any }) => {
  let colorSet = {
    team_back: "#858585",
    score_back: "#D9D9D9",
    img: "/cropped/ATL.png",
    text: "#000000",
  };

  let team = params! ? params.team : null;
  if (team) {
    colorSet.team_back = team[0].base_away;
    colorSet.score_back = team[0].light_away;
    colorSet.img = "/cropped/" + team[0].abbreviation + ".png";
    colorSet.text = team[0].text_away;
  }

  let bestOf = params! ? params.bestOf : 1;
  //console.log(team);

  let awayYvalue = params! ? params.awayYvalue/100 : 0;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="float-right"
        width={473}
        height={74}
        fill="#fff"
      >
        <mask
          id="s"
          width={150}
          height={65}
          x={1}
          y={1}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <path fill="#000" d="M5 1 1 66h117.5l3-2 16-18 7-13 5.5-16 1-16H5Z" />
        </mask>
        <g mask="url(#s)">
          <path fill="url(#r)" d="M-1-45h154v157H-1z" />
        </g>
        <path
          fill={colorSet.team_back}
          d="M155.5 1H473c-4.5 19.5-29.5 57-46 65H120.5c9-10.5 40-51.5 35-65Z"
        />
        <path
          fill="url(#t)"
          fillOpacity={0.5}
          d="M155.5 1H473c-4.5 19.5-29.5 57-46 65H120.5c9-10.5 40-51.5 35-65Z"
        />
        <path
          fill={colorSet.score_back}
          d="M142 46h168c2 10.5-12 20.5-20 20H122l20-20Z"
        />
        <path
          fill="url(#u)"
          fillOpacity={0.4}
          d="M142 46h168c2 10.5-12 20.5-20 20H122l20-20Z"
        />
        <g filter="url(#v)">
          <path
            fill="#454545"
            d="M150 1h2c2.5 19-9.084 45.423-32 65h-3c24.118-24.026 32-37.5 33-65Z"
          />
        </g>
        <g filter="url(#w)">
          <path
            fill="#fff"
            d="M152 1h5c-2.098 31.87-10.584 45.423-33.5 65H120c24.118-24.026 31.667-38.194 32-65Z"
          />
        </g>
        <path stroke="#fff" strokeWidth={2} d="M1 66 5 1" />
        <path stroke="#fff" strokeWidth={2} d="M1 66 5 1" />
        <path fill={bestOf >= 7 ? "#000000" : "none"} d="M284 53h-28v5h28z" />
        <path fill={bestOf >= 5 ? "#000000" : "none"} d="M251 53h-28v5h28z" />
        <path fill={bestOf >= 3 ? "#000000" : "none"} d="M218 53h-28v5h28z" />
        <path fill={bestOf >= 1 ? "#000000" : "none"} d="M185 53h-28v5h28z" />

        <Text
          x={170}
          y={32}
          width={300}
          textAnchor="start"
          style={{
            //color change when colorSet.text is changed
            fontWeight: 700,
            fill: colorSet.text,
            fontSize: "1.5rem",
          }}
        >
          {team[0].name}
        </Text>
        <defs>
          <linearGradient
            id="t"
            x1={3}
            x2={473}
            y1={33}
            y2={33}
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="u"
            x1={129.5}
            x2={310}
            y1={56}
            y2={56}
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <filter
            id="v"
            width={43.335}
            height={73}
            x={113}
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
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_2"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_10_2"
              result="shape"
            />
          </filter>
          <filter
            id="w"
            width={45}
            height={73}
            x={116}
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
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_2"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_10_2"
              result="shape"
            />
          </filter>
          <pattern
            id="r"
            width={1}
            height={1}
            patternContentUnits="objectBoundingBox"
          >
            <use xlinkHref="#z" transform={ "matrix(.00204 0 0 .002 -.01 "+ awayYvalue + ")"} />
          </pattern>
          <image xlinkHref={colorSet.img} id="z" width={500} height={500} />
        </defs>
      </svg>
    </>
  );
};
