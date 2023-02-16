import React from "react";
import IframeMapStyle from "../IframeMap/Map.module.scss";

const IframeMap = () => {
  return (
    <section className={IframeMapStyle.map_iframe}>
      <div className="mapouter">
        <div className={IframeMapStyle.gmap_canvas}>
          <iframe
            width="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=columbus&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          <br />
        </div>
      </div>
    </section>
  );
};

export default IframeMap;
