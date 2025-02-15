import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  text,
  containerStyles,
  handleClick,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title || text}</span>
    </button>
  );
};

export default CustomButton;
