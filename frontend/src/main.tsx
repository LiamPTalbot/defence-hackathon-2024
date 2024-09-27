import { createRoot } from "react-dom/client";
import { App } from "./App";
import "azure-maps-control/dist/atlas.min.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}