import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./screens/Homepage/Homepage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
);
