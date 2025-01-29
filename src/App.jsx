import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}