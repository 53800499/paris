import React from 'react'
import Navigation from '../navigation/navigation'
import clsx from 'clsx';
interface Props{
  children: React.ReactNode;
  className?: string;
}
export default function Layout({ children, className }:Props) {
  return (
    <div className={clsx(className)}>
      <Navigation/>
      {children}
    </div>
  )
}
