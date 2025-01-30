import React from 'react'
import Navigation from '../navigation/navigation'
import Seo from '../seo/seo';
import clsx from 'clsx';
interface Props{
  children: React.ReactNode;
  className: string;
}
export default function Layout({ children, className}:Props) {
  return (
    <div className={clsx(className, "text-sm")}>
      <Seo description={'BASSIROU Sikirou Abodounou'} title='Eskay_dev'/>
      <Navigation/>
      {children}
    </div>
  )
}
