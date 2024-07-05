import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  buttonText?: string;
  children?: ReactNode;
}
function Button({ onClick, buttonText, children }: Props) {
  return (
    <button
      onClick={onClick}
      className="h-10 w-20 items-center justify-center rounded-xl shadow-xl bg-yellow-500 hover:bg-yellow-600  focus:bg-yellow-200"
    >
      {buttonText}
      {children}
    </button>
  );
}
export default Button;
