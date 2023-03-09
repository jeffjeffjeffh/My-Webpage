import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>Jeff Harm</h1>
      <h2>Full Stack Developer</h2>
      <img src="./Jeff.jpg" alt=""></img>
      <hr></hr>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Introduction
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
