import React from "react";

interface IconProps {
  width: string;
  color: string;
}

const NextIcon: React.FC<IconProps> = ({ width, color }) => {
  return (
    <svg
      version="1.1"
      width={width}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 148.47 137.79"
    >
      <path d="m128.28,61.27c-6.23-10.97-16.13-.46-16.13-.46-1.28,3.75-1.55,8.29-4.41,11.84-4.92,6.12-9.49,12.49-14.73,18.4-3,3.38-5.79,7.15-8.29,11.09-.72-10.49-.43-21.01-1.63-31.49-1.02-8.89-.03-35.31,2.33-43.97.28-1.04.63-1.95,1.03-2.79l-.35-.39s2.54-4.77-3.75-9.75c-5.28-4.18-10.24,1.53-11.7,3.48-1.32,3.06-2.28,6.32-3.11,9.55-1.28,4.99-.92,27.75-1.45,32.88-1.07,10.48,1.19,20.93,1.2,31.43,0,.53.17,1.06.31,1.58.71,2.72.74,5.45.61,8.19-4.74-5.36-9.37-10.83-14.54-15.81-6.07-5.85-10.72-12.91-14.23-20.59-.42-.92-.72-1.79-.94-2.64l-.48-.08s-1.04-4.96-8.54-4.85c-6.3.1-6.41,7.18-6.29,9.46.89,3,2.16,5.93,3.5,8.77,2.08,4.38,5.5,7.99,8.21,12.03,5.52,8.23,13.41,14.48,19.72,22.08.32.38.76.67,1.17.96,3.88,2.82,6.23,7,9.11,10.66,1.46,1.85,2.73,3.77,4.62,5.24,4.42,3.44,7.71,3.23,11.25-1.09.92-1.13,1.67-1.94,3.24-1.87,2.74.12,4.6-1.54,6.64-3.16,3.55-2.82,4.57-7.36,7.79-10.45,2.6-2.49,5.26-5.07,6.91-8.53,1.13-2.35,3.05-4.46,5-6.26,7.85-7.28,13.07-16.23,16.66-26.15.9-2.48,1.31-4.9,1.32-7.28l-.04-.02Z" />
    </svg>
  );
};

export default NextIcon;