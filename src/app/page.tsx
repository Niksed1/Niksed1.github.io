"use client";
import Nav from "../components/nav";
import Me from "../components/me";
import Projects from "./projects";
import About from "./about";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <main>
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

    </main>
  );
}
