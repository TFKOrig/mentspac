import React from "react";
import Profilecard from "../components/Postpage/Profilebgkandavatar";
import Postnav from "../components/Postpage/Postnav";
import Biocard from "../components/Postpage/Biocard";
import Fnfcard from "../components/FollowersNFollowingpage/Followercard";
import Pnvcard from "../components/PicandVidpage/Photocard";
const Header: React.FC = () => {
  return (
    <>
      <Profilecard />
      <Postnav />
      {/* <Biocard /> */}
    </>
  );
};

export default Header;
