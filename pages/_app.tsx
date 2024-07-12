import React from "react";
import { AppProps } from "next/app";
import Profile from "../pages/Profile";
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Profile />;
};

export default MyApp;
