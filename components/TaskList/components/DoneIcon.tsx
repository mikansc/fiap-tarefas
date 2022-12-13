import { SVGProps } from "react";

const DoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={10} fill={props.fill || "#575757"} />
    <path d="M15.333 6 8 13.333 4.667 10" stroke={props.stroke || "#fff"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default DoneIcon;
