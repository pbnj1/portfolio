import React from 'react';
import { Link } from "react-router-dom";
import Pic from "../../assets/images/pic.png";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2 >Hi, I'm Pete</h2>
        <p>Welcome to my Portfolio!</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div  className="pic">
        <img style = {{border: "5px solid white", borderRadius: "50%"}}
          src={Pic}
          alt="profile pic"
        />
      </div>
    </section>
  );
}

export default Home;