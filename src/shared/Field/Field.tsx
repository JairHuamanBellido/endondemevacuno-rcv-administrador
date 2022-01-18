import { HtmlHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
  input: UseFormRegisterReturn;
  label: string;
}

export default function Field({ label, input, ...props }: Props) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label>{label}</label>
      <input
        {...props}
        className="border-none border-b-[1px] border-b-gray-400"
        type="text"
        {...input}
      />
    </div>
  );
}
