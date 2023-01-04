import { SVGProps } from "react";

export const UndoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={9.25} stroke="#575757" strokeWidth={1.5} style={{ fill: "none" }} />
  </svg>
);
