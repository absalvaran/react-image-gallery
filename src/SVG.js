import React from "react";
import { number, oneOf, string } from "prop-types";

const left = <polyline points="15 18 9 12 15 6" />;
const right = <polyline points="9 18 15 12 9 6" />;
const maximize = (
  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
);
const minimize = (
  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
);
const play = <polygon points="5 3 19 12 5 21 5 3" />;
const pause = (
  <React.Fragment>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </React.Fragment>
);
const close = (
  <>
    <path
      d="M15 5L5 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 5L15 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);
const zoomIn = (
  <>
    <path
      d="M11.0586 19.9706C15.4769 19.9706 19.0586 16.3889 19.0586 11.9706C19.0586 7.5523 15.4769 3.97058 11.0586 3.97058C6.64032 3.97058 3.05859 7.5523 3.05859 11.9706C3.05859 16.3889 6.64032 19.9706 11.0586 19.9706Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0585 21.9706L16.7085 17.6206"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.0586 8.97058V14.9706"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.05859 11.9706H14.0586"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);
const zoomOut = (
  <>
    <path
      d="M11.0586 19.9706C15.4769 19.9706 19.0586 16.3889 19.0586 11.9706C19.0586 7.5523 15.4769 3.97058 11.0586 3.97058C6.64032 3.97058 3.05859 7.5523 3.05859 11.9706C3.05859 16.3889 6.64032 19.9706 11.0586 19.9706Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0585 21.9706L16.7085 17.6206"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.05859 11.9706H14.0586"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const reset = (
  <path
    d="M14.7755 0.687358C14.655 0.634214 14.5253 0.605378 14.3936 0.602506H10.8581C10.5918 0.602505 10.3364 0.708293 10.1481 0.896597C9.95981 1.0849 9.85402 1.34029 9.85402 1.6066C9.85402 1.8729 9.95981 2.12829 10.1481 2.3166C10.3364 2.5049 10.5918 2.61069 10.8581 2.61069L11.9824 2.60362L8.73679 5.84924C8.54925 6.03677 8.4439 6.29113 8.4439 6.55634C8.4439 6.82156 8.54925 7.07592 8.73679 7.26345C8.92433 7.45099 9.17868 7.55634 9.4439 7.55634C9.70911 7.55634 9.96347 7.45099 10.151 7.26345L13.3966 4.01783L13.3896 5.14213C13.389 5.27414 13.4146 5.40495 13.4649 5.52702C13.5151 5.64909 13.5891 5.75999 13.6824 5.85334C13.7758 5.94668 13.8867 6.02063 14.0088 6.07089C14.1308 6.12116 14.2616 6.14676 14.3936 6.14622C14.5257 6.14676 14.6565 6.12116 14.7785 6.07089C14.9006 6.02062 15.0115 5.94668 15.1049 5.85334C15.1982 5.75999 15.2721 5.64909 15.3224 5.52702C15.3727 5.40495 15.3983 5.27414 15.3977 5.14213V1.6066C15.3949 1.47497 15.366 1.34521 15.3129 1.22476C15.2115 0.981883 15.0184 0.788788 14.7755 0.687358ZM5.90836 8.67766L2.66274 11.9233L2.66981 10.799C2.66981 10.5327 2.56403 10.2773 2.37572 10.089C2.18742 9.90068 1.93202 9.79489 1.66572 9.79489C1.39942 9.79489 1.14403 9.90068 0.955723 10.089C0.767419 10.2773 0.661631 10.5327 0.661631 10.799L0.661631 14.3345C0.664504 14.4661 0.69334 14.5959 0.746484 14.7164C0.847913 14.9592 1.04101 15.1523 1.28388 15.2538C1.40434 15.3069 1.5341 15.3357 1.66572 15.3386L5.20126 15.3386C5.33327 15.3392 5.46408 15.3135 5.58614 15.2633C5.70821 15.213 5.81912 15.1391 5.91246 15.0457C6.00581 14.9524 6.07975 14.8415 6.13002 14.7194C6.18029 14.5973 6.20589 14.4665 6.20535 14.3345C6.20589 14.2025 6.18029 14.0717 6.13002 13.9496C6.07975 13.8276 6.00581 13.7167 5.91246 13.6233C5.81912 13.53 5.70821 13.456 5.58614 13.4058C5.46408 13.3555 5.33327 13.3299 5.20126 13.3304L4.07696 13.3375L7.32258 10.0919C7.51011 9.90434 7.61547 9.64999 7.61547 9.38477C7.61547 9.11956 7.51011 8.8652 7.32258 8.67767C7.13504 8.49013 6.88069 8.38477 6.61547 8.38477C6.35025 8.38477 6.0959 8.49013 5.90836 8.67766Z"
    fill="currentColor"
  />
);

const iconMapper = {
  left,
  right,
  maximize,
  minimize,
  play,
  pause,
  close,
  reset,
  zoomIn,
  zoomOut,
};

const SVG = (props) => {
  const { strokeWidth, viewBox, icon } = props;
  return (
    <svg
      className="image-gallery-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconMapper[icon]}
    </svg>
  );
};

SVG.propTypes = {
  strokeWidth: number,
  viewBox: string,
  icon: oneOf([
    "left",
    "right",
    "maximize",
    "minimize",
    "play",
    "pause",
    "close",
    "reset",
    "zoomIn",
    "zoomOut",
  ]).isRequired,
};

SVG.defaultProps = {
  strokeWidth: 1,
  viewBox: "0 0 24 24",
};

export default SVG;
