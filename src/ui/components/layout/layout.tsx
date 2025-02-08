/** @format */

import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Session from "../session/session";
import { SessionStatusTypes } from "@/types/sessionStatusTypes";
import clsx from "clsx";
interface Props {
  children: React.ReactNode;
  isDisplayCreadCrumbs?: boolean;
  sessionStatus?: SessionStatusTypes;
  className?: string;
}
export default function Layout({ children, isDisplayCreadCrumbs, sessionStatus, className }: Props) {
  return (
    <Session sessionStatus= {sessionStatus}>
      <Navigation />
      {isDisplayCreadCrumbs && (
        <Breadcrumbs className="absolute shadow-lg bottom-10 right-10" />
      )}
      <div className={clsx(className)}>{children}</div>
      <Footer />
    </Session>
  );
}
