// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Profile from '../components/Profilepage/Profilebgkandavatar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
  <Profile/>
  );
};

export default MyApp;
