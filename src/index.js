import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./ContextAPI +HoverButton/App";
// import App from "./TextAnimationTest/App";
// import App from "./ContextAPI +HoverButton/App";
// import App from "./PracticeContext + Framer/App";
// import App from './Modal A/App';
// import App from "./ScrollY/App";
// import App from "./ScrollYprogress/App"
// import App from "./FetchAPI/App7";
// import App from "./SearchAPI/App";
import App from "./Jest Test 1/App";
import Container from "./ContextAPI +HoverButton/Container"; // Import your Container component
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import LiVariant from "./ContextAPI +HoverButton/liVariantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container>
    <LiVariant>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LiVariant>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
