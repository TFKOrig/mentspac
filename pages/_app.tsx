// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import Profile from "../components/Postpage/Profilebgkandavatar";
import Postnav from "../components/Postpage/Postnav";
import Postcard from "../components/Postpage/Postcard";
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // return <Profile />;
  // return <Postnav />;
  return <Postcard/>;
};

export default MyApp;
