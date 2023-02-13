import React from "react";
import Awards from "./Awards/Awards";
import Capabilities from "./Capabilities/Capabilities";
import Collaboration from "./Collaboration/Collaboration";
import CreativeTeam from "./CreativeTeam/CreativeTeam";
import DesignCreators from "./DesignCreators/DesignCreators";
import FullScreen from "./FullScreen/FullScreen";
import Horizontal from "./HorizontalHalfAccordion/Horizontal";

const Home = () => {
  return (
    <>
      <DesignCreators />
      <CreativeTeam />
      <FullScreen />
      <Capabilities />
      <Horizontal />
      <Awards />
      <Collaboration />
    </>
  );
};

export default Home;
