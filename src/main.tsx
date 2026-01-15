import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import TechStackPage from "./pages/TechStackPage.tsx";
import ExperiencePage from "./pages/ExperiencePage.tsx";
import CertificationsPage from "./pages/CertificationsPage.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/all-projects" element={<ProjectsPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
