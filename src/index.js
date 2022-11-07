import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from "./pages/Home";
import News from "./pages/News";
import Management from "./pages/Management";
import RulesCNN from "./pages/RulesCNN";
import NotFoundPage from "./pages/NotFoundPage";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path="/404" element={<NotFoundPage />}/>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/news" element={<News />}/>
      <Route exact path="/rulesCNN" element={<RulesCNN />}/>
      <Route exact path="/management" element={<Management />}/>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
