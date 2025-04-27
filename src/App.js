import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import "./App.css";

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      { className: "App" },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/",
          element: React.createElement(Home),
        }),
        React.createElement(Route, {
          path: "/about",
          element: React.createElement(About),
        }),
        React.createElement(Route, {
          path: "/contact",
          element: React.createElement(Contact),
        }),
        React.createElement(Route, {
          path: "/project1",
          element: React.createElement(Project1),
        }),
        React.createElement(Route, {
          path: "/project2",
          element: React.createElement(Project2),
        })
      )
    )
  );
}

export default App;
