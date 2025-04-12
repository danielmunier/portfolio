import Image from "next/image";
import Technologies from "./components/Technologies";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";
import Navbar from "./components/Nav";
import Timeline from "./components/Timeline";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className=" min-h-screen bg-background">
      <Navbar />
      <div className="p-4 max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <About />
          </div>

          <div>
            <Technologies />
          </div>

          <div className="md:col-span-2">
            <ProjectsGrid />
          </div>
          <Languages/>

        </div>
          <Timeline/>
          <Contact/>
      </div>
    </div>
  );
}