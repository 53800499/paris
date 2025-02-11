/** @format */

import AuthUserProvider from "@/context/AuthUserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}
