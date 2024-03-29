import React from "react";

interface IconProps {
  width: string;
  color: string;
}

const ScrollToTopIcon: React.FC<IconProps> = ({ width, color }) => {
  return (
    <svg
      version="1.1"
      width={width}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 171.7 177.9"
    >
      <g>
        <path
          d="M133.1,39.2c-1.5-1.7-2.7-2-4-1.3c-4,2-8.1-2.1-12.3-0.6c-3.4,1.3-7.7-0.5-11.1,0.9c-5.4,2.2-11.8,0-17.7-0.2
		c-4.7-0.2-9.2,0.6-14,0c-3.1-0.4-6.1-0.4-9.2-0.3c-3.9,0.1-7.8,0-11.8-0.2c-3.7-0.3-7.5-1.4-11-0.3c-2.3,0.7-3.4,4.5-2.4,9.7
		c0.9,4.7,3,7.3,5.7,7c4.3-0.4,8.6-1,13.2,0.8c1,0.4,2,0.4,3,0.4c3,0,5.9-0.1,8.9-0.2c2.2-0.1,4.4-0.3,6.7-0.2
		c2.8,0.1,5.7,1.1,8.4,0.8c2.2-0.2,4.5-0.1,6.6-0.4c2.9-0.5,7.2,1.2,9.9-0.4c4-2.4,9.1,1.8,13.5,0.8c6.5-1.4,12.4,0.6,18.9-1.2
		c0.3-0.1,0.6-0.5,0.7-0.6C137.2,50.1,136.1,42.7,133.1,39.2z"
        />
        <path
          d="M120.3,93.1c-3.5-3.7-7.4-6.8-11.1-10.3c-3.8-3.5-6-8.3-9.9-11.6c-2.2-1.8-3.8-3.9-4.9-6.7
		c-1.6-4.2-6.1-5.5-10-3.3c-0.8,0.4-1.5,1-2.1,1.6c-5.2,5-10.4,9.9-15.4,15c-3.5,3.7-7,7.4-11,10.5c-3.3,2.6-6.1,5.7-9.1,8.6
		c-2.6,2.5-3,5.6-1.6,8.7c1.6,3.5,3.8,6.4,8.1,6.8c3.1,0.3,5.4-1.1,7.1-3.7c0.7-1.2,1-2.5,2.1-3.6c5.6-5.6,12.2-10.3,17-16.8
		c0,1.8,0.1,3.6,0.1,5.4c0.1,1.9,0.3,3.8,0.2,5.7c-0.1,2.3-1.1,4.8-0.8,7.1c0.2,1.9,0.1,3.8,0.4,5.6c0.5,2.5-1.2,6.1,0.4,8.4
		c2.4,3.4-1.8,7.7-0.8,11.4c1.4,5.6-0.6,10.5,1.2,16c0.1,0.3,0.5,0.5,0.6,0.6c3.4,1.9,10.8,0.9,14.3-1.7c1.7-1.2,2-2.3,1.3-3.4
		c-2-3.4,2.1-6.9,0.6-10.4c-1.3-2.9,0.5-6.6-0.9-9.4c-2.2-4.5,0-10,0.2-15c0.2-4-0.6-7.8,0-11.8c0.2-1.5,0.3-3,0.3-4.5
		c2,1.7,4,3.5,5.8,5.5c3.2,3.5,6.8,6.7,9.5,10.5c1.8,2.5,3.7,4.7,6,6.5c3.5,2.8,7,2.8,9.9,0c3-2.8,4.3-7.9,1.7-10.5
		C126.1,100.9,123.7,96.6,120.3,93.1z"
        />
      </g>
    </svg>
  );
};

export default ScrollToTopIcon;
