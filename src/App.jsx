import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Membership from "./pages/Membership/Membership";
import Events from "./pages/Events/Events";
import Resources from "./pages/Resources/Resources";
import VisionMission from "./pages/AboutUs/VisionandMission/VisionMission";
import Objectives from "./pages/AboutUs/Objectives/Objectives";
import Brahmasutras from "./pages/AboutUs/Brahmasutras/Brahmasutras";
import Charter from "./pages/AboutUs/Charter/Charter";
import Goals from "./pages/AboutUs/Goals/Goals";
import Framework from "./pages/AboutUs/Framework/Framework";
import FocusArea from "./pages/FocusArea/FocusArea";
import StudentChapter from "./pages/StudentChapter/StudentChapter";
import Executive from "./pages/AboutUs/Executive/Executive";
import Registration from "./pages/Membership/General/Registration";
import StudentRegistration from "./pages/Membership/Student/StudentRegistration";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/vision-mission" element={<VisionMission />} />
          <Route path="/about-us/objectives" element={<Objectives />} />
          <Route path="/about-us/brahmasutras" element={<Brahmasutras />} />
          <Route path="/about-us/charter" element={<Charter />} />
          <Route path="/about-us/goals" element={<Goals />} />
          <Route path="/about-us/framework" element={<Framework />} />
          <Route path="/about-us/executive" element={<Executive />} />
          <Route path="/about-membership" element={<Membership />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/membership/general-registration" element={<Registration />} />
          <Route path="/membership/student-registration" element={<StudentRegistration />} />
          <Route path="/focus-area" element={<FocusArea />} />
          <Route path="/student-chapter" element={<StudentChapter />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
