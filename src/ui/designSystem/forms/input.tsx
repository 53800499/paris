import React from "react";
import clsx from "clsx";
import { UseFormRegister, FieldValues, FieldErrors, Path } from "react-hook-form";
import Typography from "../typography/typography";

interface InputProps<T extends FieldValues> {
  isLoading?: boolean;
  placeholder?: string;
  placeholders?: string;
  type?: "text" | "email" | "password" | "tel" | "number"| "file";
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  errorMsg?: string;
  id: Path<T>;
  required?: boolean;
  isAutoCompleted?: boolean;
  className?: string;
}

export const Input = <T extends FieldValues>({
  isLoading,
  placeholder,
  placeholders,
  type = "text",
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ",
  id,
  className,
  required = true,
  isAutoCompleted = false,
}: InputProps<T>) => {
  return (
    <div className="space-y-2 w-full">
      <label htmlFor={id as string} className="text-sm text-gray-700">
        <Typography theme="gray">{placeholder}</Typography>
      </label>
      <input
        id={id as string}
        placeholder={placeholders}
        type={type}
        className={clsx(
          "w-full p-2 font-light border shadow-xl border-gray-900 transition-shadow duration-300 rounded-full placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary",
          {
            "cursor-not-allowed": isLoading,
            "border-red-500 placeholder-red-500": errors[id],
          },
          className
        )}
        disabled={isLoading}
        {...register(id, { required: { value: required, message: errorMsg } })}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />

      {errors[id] && (
        <Typography variant="caption4" component="div" theme="secondary" className="text-red-500">
          {errors[id]?.message as string}
        </Typography>
      )}
    </div>
  );
};
