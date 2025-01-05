"use client";
import Nav from "../components/nav";
import Me from "../components/me";
import Projects from "./projects";
import About from "./about";

export default function Home() {
  return (
    <div>
      <div className = "min-h-screen bg-base-100" >
        <Nav />
        <Me />
      </div>
      <div>
        <About/>
      </div>
      <div className = "min-h-screen bg-base-100" >
        <Projects />
      </div>
    </div>
  );
}
