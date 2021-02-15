import React from "react";
import { useSpring, animated } from "react-spring";

const ContactIcon = ({ active }) => {
  const up = useSpring({
    transformOrigin: "top",
    transformBox: "fill-box",
    transform: active
      ? "rotateX(180deg) scaleY(0.5) translateY(-70%)"
      : "rotateX(0) scaleY(1) translateY(0)",
    from: {
      transform: "rotateX(180deg) scaleY(0.5) translateY(-70%)",
    },
    config: { duration: active ? 300 : 0 },
  });

  return (
    <svg
      className="nav__icon"
      viewBox="0 0 251 251"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <animated.path
          style={up}
          d="M158.616 144.682C151.036 150.178 135.967 163.514 125.5 163.333C115.033 163.514 99.9637 150.178 92.384 144.682L14.1508 86.6997C11.534 84.6273 10 81.5187 10 78.1849V69.625C10 57.6862 19.7002 48 31.6562 48H219.344C231.3 48 241 57.6862 241 69.625V78.1849C241 81.5187 239.466 84.6724 236.849 86.6997L158.616 144.682Z"
          fill="currentColor"
        />
        <path
          d="M236.624 105.126C238.383 103.729 241 105.036 241 107.243V199.375C241 211.314 231.3 221 219.344 221H31.6562C19.7002 221 10 211.314 10 199.375V107.289C10 105.036 12.5717 103.774 14.3764 105.171C24.4826 113.01 37.8824 122.967 83.902 156.35C93.4217 163.288 109.483 177.885 125.5 177.795C141.607 177.93 157.984 163.018 167.143 156.35C213.163 122.967 226.517 112.965 236.624 105.126Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default ContactIcon;
