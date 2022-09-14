import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="content">
      <h1>WELCOME TO CHATSCRUM</h1>
      <div className="links">
        <h3>
          <Link to="/sign-up">Sign Up</Link>{" "}
        </h3>
        <h3>
          <Link to="/sign-in">Sign In</Link>
        </h3>
      </div></div>
    </section>
  );
}
