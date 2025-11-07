import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 🧭 React Router imports
import "./index.css";
import App from "./App.jsx";

// (🆕 you'll soon create these two files in src/pages/)
import HomePage from "./pages/HomePage.jsx";
import ShowDetailPage from "./pages/ShowDetailPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap your entire app in the router */}
    <BrowserRouter>
      <Routes>
        {/* The "App" component will act as your main layout (e.g., nav, header, etc.) */}
        <Route path="/" element={<App />}>
          {/* Default route (homepage) */}
          <Route index element={<HomePage />} />
          {/* Dynamic route for show details */}
          <Route path="show/:id" element={<ShowDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

