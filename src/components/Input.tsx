import React from "react";
import { Input as ShadcnInput } from "./ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isRTL?: boolean;
}

const Input = ({ isRTL = false, className, ...props }: InputProps) => {
  const rtlClass = isRTL ? "text-right" : "text-left";
  return (
    <ShadcnInput className={`${rtlClass} ${className || ""}`} {...props} />
  );
};

export default Input;
