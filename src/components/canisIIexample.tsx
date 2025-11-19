"use client";
import React, { useEffect, useRef } from "react";

const TableauEmbed: React.FC = () => {
  const vizRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const divElement = vizRef.current;
    if (!divElement) return;

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    scriptElement.async = true;
    divElement.appendChild(scriptElement);

    return () => {
      divElement.innerHTML = ""; // cleanup when component unmounts
    };
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      ref={vizRef}
      style={{ position: "relative", width: "100%" }}
    >
      <noscript>
        <a href="https://chinaimpact.netlify.app/">
          <img
            alt="General Distribution of Accounts"
            src="https://public.tableau.com/static/images/NB/NBDMMQ5CM/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>

      <object className="tableauViz" style={{ display: "none" }}>
        <param
          name="host_url"
          value="https%3A%2F%2Fpublic.tableau.com%2F"
        />
        <param name="embed_code_version" value="3" />
        <param
          name="path"
          value="views/AnalysisforCANIS2/map2?:embed=y&:display_count=n&:sid=&:redirect=auth&:origin=viz_share_link&:size=1272,1"
        />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/NB/NBDMMQ5CM/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="origin" value="viz_share_link" />
      </object>
    </div>
  );
};

export default TableauEmbed;
