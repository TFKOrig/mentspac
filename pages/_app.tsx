// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import Profile from "../components/Postpage/Profilebgkandavatar";
import Postnav from "../components/Postpage/Postnav";
import Postcard from "../components/Postpage/Biocard";
import Fnfcard from "../components/FollowersNFollowingpage/Fnfcard";
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // return <Profile />;
  // return <Postnav />;
  // return <Postcard/>;
  return <Fnfcard />;
};

export default MyApp;
