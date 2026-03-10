//Lines 10-14 bring all the necessary pieces together:
//
//   10 React
//   11 React’s library to talk to web browsers (React DOM)
//   12 the styles for your components
//   14 the component you created in App.js.

//The remainder of the file brings all the pieces together and injects the final product into index.html in the public folder.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

