import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import SkillsTools from "./components/SkillTools";
import SelectedProjects from "./components/SelectedProjects";
import ConceptsExperiments from "./components/ConceptsExperiments";
import ConceptDetail from "./pages/ConceptDetail";
import DriveoDetail from "./pages/DriveoDetail";
import DideDetail from "./pages/DideDetail";
import DoraDetail from "./pages/DoraDetail";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import RitmoDetail from "./pages/RitmoDetail";
<<<<<<< HEAD
import Projects from "./components/Projects";
import CloudDataBase from "./pages/CloudDataBase";
import KheradKhan from "./pages/kheradkhan";
import Dorna from "./pages/Dorna";
=======
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0



export default function App() {
  return (
<<<<<<< HEAD
=======
    <div classname="max-w-screen">
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
    <Routes>
      {/* 🌍 Main Page */}
      <Route
        path="/"
        element={
          <>
            <div id="home">
              <section className="h-[80vh] bg-linear-to-br from-[#0b1221] to-[#0e1f4b]">
                <Navbar />
                <Hero />
              </section>
            </div>


            <section id="experience">
              <ExperienceSection />
            </section>


<<<<<<< HEAD
            <section id="case studies">
              <SelectedProjects />
            </section>

            <section id="projects">
              <Projects/>
=======
            <section id="projects">
              <SelectedProjects />
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
            </section>


            <section id="concepts">
              <ConceptsExperiments />
            </section>


            <section id="skill">
              <SkillsTools />
            </section>


            <section id="about Me">
              <AboutMe />
            </section>

            <section id="contact">
              <Footer />

            </section>



          </>
        }
      />
      <Route path="/ConceptDetail" element={<ConceptDetail />} />
      <Route path="/DriveoDetail" element={<DriveoDetail />} />
      <Route path="/DideDetail" element={<DideDetail />} />
      <Route path="/RitmoDetail" element={<RitmoDetail />} />
      <Route path="/DoraDetail" element={<DoraDetail />} />


<<<<<<< HEAD
      <Route path="/CloudDataBase" element={<CloudDataBase />} />
      <Route path="/Dorna" element={<Dorna />} />
      <Route path="/KheradKhan" element={<KheradKhan />} />



    </Routes>
=======

    </Routes>
      </div>
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
  );
}
