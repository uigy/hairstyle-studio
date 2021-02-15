import React from "react";
import { useSpring, animated } from "react-spring";

const OfferIcon = ({ active }) => {
  const props = useSpring({
    transformOrigin: "35%",
    transformBox: "fill-box",
  });

  const { x } = useSpring({
    from: { x: 0 },
    x: active ? 1 : 0,
    config: { duration: active ? 300 : 0 },
  });

  return (
    <svg
      className="nav__icon"
      viewBox="0 0 219 251"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <animated.path
          style={{
            ...props,
            transform: x
              .interpolate({
                range: [0, 0.4, 0.8, 1],
                output: [0, 30, 0, 15],
              })
              .interpolate((x) => `rotate(${x}deg)`),
          }}
          fillRule="evenodd"
          d="M132.928 126.111L203.508 55.6095C205.497 53.6228 205.497 50.4033 203.508 48.4208C189.597 34.5264 167.039 34.5264 153.128 48.4208L104.139 97.3564L75.3465 126.111L61.3806 140.061C59.5273 139.802 57.6357 139.667 55.7145 139.667C33.2282 139.667 15 157.873 15 180.333C15 202.793 33.2282 221 55.7145 221C78.2008 221 96.429 202.793 96.429 180.333C96.429 175.059 95.4239 170.023 93.596 165.397L104.139 154.866L132.928 126.111ZM42.143 180.333C42.143 187.806 48.2332 193.889 55.7145 193.889C63.1958 193.889 69.286 187.806 69.286 180.333C69.286 172.861 63.1958 166.778 55.7145 166.778C48.2332 166.778 42.143 172.861 42.143 180.333Z"
          fill="currentColor"
        />
        <animated.path
          style={{
            ...props,
            transform: x
              .interpolate({
                range: [0, 0.4, 0.8, 1],
                output: [0, -30, 0, -15],
              })
              .interpolate((x) => `rotate(${x}deg)`),
          }}
          fillRule="evenodd"
          d="M104.139 88.1342L93.596 77.6032C95.4239 72.9774 96.429 67.9406 96.429 62.6667C96.429 40.2068 78.2008 22 55.7145 22C33.2282 22 15 40.2068 15 62.6667C15 85.1265 33.2282 103.333 55.7145 103.333C57.64 103.333 59.5273 103.198 61.3806 102.939L75.3465 116.889L153.128 194.579C167.039 208.474 189.597 208.474 203.508 194.579C205.497 192.597 205.497 189.377 203.508 187.39L104.139 88.1342ZM42.143 62.6667C42.143 70.1392 48.2332 76.2222 55.7145 76.2222C63.1958 76.2222 69.286 70.1392 69.286 62.6667C69.286 55.1942 63.1958 49.1111 55.7145 49.1111C48.2332 49.1111 42.143 55.1942 42.143 62.6667Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default OfferIcon;
