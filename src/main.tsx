import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App.tsx";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
