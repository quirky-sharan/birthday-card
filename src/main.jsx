import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LetterPage from "./pages/LetterPage";
import SurprisePage from "./pages/SurprisePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="letter" element={<LetterPage />} />
          <Route path="surprise" element={<SurprisePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
