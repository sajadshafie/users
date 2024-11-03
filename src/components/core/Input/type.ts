import React from "react";
import { ControllerProps } from "react-hook-form";
export interface PropsType
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement> & ControllerProps,
    "defaultValue" | "name" | "render"
  > {
  clasName?: string;
  classNameContainer?: string;
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  name?: string;
}
