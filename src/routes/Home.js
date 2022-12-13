import React from "react";
import homePageImg from "../img/homePage.png";

function Home() {
  const styles = {
    img: {
      marginTop: "-5em",
      zIndex: "-1",
      top:0,
      position:"fixed",
    },
    contentHome: {
      marginTop: "40rem",
      backgroundColor: "pink",
    }


  };

  return (
    <div className="homePage">
      <img src={homePageImg} alt="Landing Page" style={styles.img}></img>
      <div className="contentHome" style={styles.contentHome}>
        <h1>placeholder scroll box</h1>
        <p>hi</p>
        <p>2</p>
        <p>card</p>
      </div>
    </div>
  );
}
export default Home;
