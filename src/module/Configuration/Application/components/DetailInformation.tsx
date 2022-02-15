import { InputHTMLAttributes } from "react";
import tailwindCssBuilder from "../../../../utils/tailwindCssBuilder/tailwindCssBuilder";

interface Props {
  label: string;
  value: string;
  editable?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputsProps?: InputHTMLAttributes<HTMLInputElement>[];
  multiple?: boolean;
}

export default function DetailInformation({
  label,
  value,
  editable,
  inputProps,
  inputsProps,
  multiple,
}: Props) {
  if (multiple) {
    return (
      <div className="mb-8">
        <span className="text-text-secondary text-base">{label}</span>
        {!editable && <p className="text-text-default">{value}</p>}
        {editable && (
          <div>
            {inputsProps?.map((props, i) => (
              <input
                className={tailwindCssBuilder(
                  "bg-gray-100 p-2 mt-2  rounded mr-4",
                  "focus:outline-none focus:outline-primary"
                )}
                key={`input-${i}`}
                {...props}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
  if (editable !== undefined) {
    return (
      <div className="mb-8">
        <span className="text-text-secondary text-base">{label}</span>
        {!editable && <p className="text-text-default">{value}</p>}
        {editable && <input {...inputProps} />}
      </div>
    );
  }
  return (
    <div className="mb-8">
      <span className="text-text-secondary text-base">{label}</span>
      <p className="text-text-default">{value}</p>
    </div>
  );
}
