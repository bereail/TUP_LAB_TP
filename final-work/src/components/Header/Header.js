import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divId) => {
    setHoveredDiv(divId);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  return (
    <div className="div-header">
      <h1 className="title-header">Virtual Library</h1>
      <div className="column-header">
        <div
          className={`div-header-container ${hoveredDiv === "autores" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("autores")}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="link-header">Autores</Link>
        </div>
        <div
          className={`div-header-container ${hoveredDiv === "generos" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("generos")}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="link-header">Generos</Link>
        </div>
        <div
          className={`div-header-container ${hoveredDiv === "series" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("series")}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="link-header">Series</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
