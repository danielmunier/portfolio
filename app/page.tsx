import Image from "next/image";
import Technologies from "./components/Technologies";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";
import Navbar from "./components/Nav";

export default function Home() {
  return (
    <div className="bg-[#020817] min-h-screen">
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

          <div className="md:col-span-1">
            <div className="bg-[#1E2330] rounded-lg p-4 text-gray-300">
              Something
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}