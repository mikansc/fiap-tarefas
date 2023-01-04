import type { ButtonHTMLAttributes } from "react";

type IconName = "exit" | "filter" | "close" | "show" | "hide";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconName;
}

export interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: "text" | "outlined";
}
