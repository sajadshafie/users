import React from "react";
import { PropsType } from "./type";
import { Controller } from "react-hook-form";

export default function index(props: PropsType) {
  const {
    clasName,
    classNameContainer,
    label,
    startIcon,
    endIcon,
    control,
    type,
    ...restProps
  } = props;
  const renderController = () => {
    return (
      <Controller
        name={name as any}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <div>
              <input
                type={type === "number" ? "tel" : type}
                {...restProps}
                {...field}
                className={`bg-gray-50 border-gray-300 outline-none  focus:border-primary-700 transition-all duration-200 border-2 rounded-lg w-full focus:text-gray-900
    h-[44px] ${startIcon ? "pr-8" : "pr-4"} ${
                  endIcon ? "pl-8" : "pl-4"
                } ${clasName}`}
              />
              {fieldState.error && (
                <span className="text-Body-OneLine/14/Regular text-red-600">
                  {fieldState.error.message}
                </span>
              )}
            </div>
          );
        }}
      />
    );
  };
  return (
    <div className={`w-full ${classNameContainer}`}>
      <label className="mb-4 text-gray-900 text-BodyText/14/Regular">
        {label}
      </label>
      <div className="relative w-full">
        {startIcon && (
          <div className="absolute right-0 h-full w-fit px-4">{startIcon}</div>
        )}
        {control ? (
          renderController()
        ) : (
          <input
            type={type === "number" ? "tel" : type}
            {...restProps}
            className={`bg-gray-50 border-gray-300 outline-none  focus:border-primary-700 transition-all duration-200 border-2 rounded-lg w-full focus:text-gray-900
            h-[44px] ${startIcon ? "pr-8" : "pr-4"} ${
              endIcon ? "pl-8" : "pl-4"
            } ${clasName}`}
          />
        )}
       
        {endIcon && (
          <div className="absolute left-0 h-full w-fit px-4">{endIcon}</div>
        )}
      </div>
    </div>
  );
}
