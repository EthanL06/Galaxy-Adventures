import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ text, onClick, className }: Props) => {
  return (
    <div
      className={`button flex cursor-pointer items-center justify-center rounded-md bg-dark-accent p-3 font-bold transition-all ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
