import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  text?: string;
  isDisabled?: boolean;
}
