import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Excellence from "./pages/Excellence";
import Stem from "./pages/Stem";
import KP from "./pages/KP";
import Meganom from "./pages/Meganom";
import Clubs from "./pages/Clubs";
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
          path: "/Excellence",
          element: React.createElement(Excellence),
        }),
        React.createElement(Route, {
          path: "/Stem",
          element: React.createElement(Stem),
        }),
        React.createElement(Route, {
          path: "/KP",
          element: React.createElement(KP),
        }),
        React.createElement(Route, {
          path: "/Meganom",
          element: React.createElement(Meganom),
        }),
        React.createElement(Route, {
          path: "/Clubs",
          element: React.createElement(Clubs),
        })
      )
    )
  );
}

export default App;
