import { About } from "./components/About";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Project/>
    </div>
  )
}