"use client";
import Nav from "../components/nav";
import Me from "../components/me";
import Projects from "./projects";
import About from "./about";

export default function Home() {
  return (
    <div className="bg-base-100">
      <div className = "min-h-screen" >
        <Nav />
        <Me />
      </div>
      <div>
        <About/>
      </div>
      <div className = "min-h-screen" >
        <Projects />
      </div>
    </div>
  );
}
