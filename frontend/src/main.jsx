import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // ✅ Ensure correct import
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
