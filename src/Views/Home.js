import React from "react";
import "../Sheets/Home.css";
import MainHeader from "../Componets/MainHeader.js";
import Associate from "../Componets/Associate.js";
import Relatedlink from "../Componets/RelatedLink.js";

function Home(props) {
  return (
    <div>
      <MainHeader />
      <Associate />
      <Relatedlink />
    </div>
  );
}

export default Home;