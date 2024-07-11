// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import Profile from "../components/Postpage/Profilebgkandavatar";
import Postnav from "../components/Postpage/Postnav";
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // return <Profile />;
  return <Postnav />;
};

export default MyApp;
