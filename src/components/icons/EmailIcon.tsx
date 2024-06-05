import React from "react";

interface IconProps {
  width: string;
  color: string;
}

const EmailIcon: React.FC<IconProps> = ({ width, color }) => {
  return (
    <svg
      version="1.1"
      width={width}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g>
        <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
      </g>
    </svg>
  );
};

export default EmailIcon;
