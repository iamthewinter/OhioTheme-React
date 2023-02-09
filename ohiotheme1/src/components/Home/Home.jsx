import React from "react";
import Capabilities from "./Capabilities/Capabilities";
import CreativeTeam from "./CreativeTeam/CreativeTeam";
import DesignCreators from "./DesignCreators/DesignCreators";
import FullScreen from "./FullScreen/FullScreen";

const Home = () => {
  return (
    <>
      <DesignCreators />
      <CreativeTeam />
      <FullScreen />
      <Capabilities />
    </>
  );
};

export default Home;
