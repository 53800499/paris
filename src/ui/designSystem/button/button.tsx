import React from 'react'
import clsx from "clsx";
import { RiFacebookFill } from 'react-icons/ri';

interface Props{
    children: React.ReactNode;
    className?: string;
    theme: "blue" | "white";
    icon?: any;
}
const Button = ({children, className,theme, icon}:Props) => {
let themeStyles:string = "";

switch (theme) {
  case "blue": 
  themeStyles ="bg-primary hover:bg-primary-400 border text-white";
  break;
  case "white": 
  themeStyles ="text-primary border hover:bg-primary-300  border-primary";
  break;
}
  return (
    <button type='button' className={clsx(className, themeStyles, "text-sm p-3")}>
      {icon ? (<RiFacebookFill/>) : (<>{children}</>)}
    </button>
  )
}

export default Button
