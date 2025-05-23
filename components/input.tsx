import { InputHTMLAttributes } from "react";

interface InputProps {
    // type: string;
    // placeholder: string;
    // required: boolean;
    name:string;
    errors?: string[];
  }
  
  export default function Input({
    // type,
    // placeholder,
    // required,
    name,
    errors= [],
    ...restProps
  }: InputProps & InputHTMLAttributes<HTMLInputElement>) {
    console.log(restProps);restProps
    return (
      <div className="flex flex-col gap-2">
        <input
          name={name}
          className="w-full h-10 transition bg-transparent border-none rounded-md focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 placeholder:text-neutral-400"
          // type={type}
          // placeholder={placeholder}
          // required={required}
          {...restProps}
        />
        {errors.map((error, index) => (
          <span key={index} className="font-medium text-red-500">
            {error}
          </span>
        ))}
      </div>
    );
  }