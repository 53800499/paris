import React from 'react'
interface Props{
    variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
    children: React.ReactNode;
}

export default function Typography({variant = ""}) {
  return (
    <div>
      
    </div>
  )
}
