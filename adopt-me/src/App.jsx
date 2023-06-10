import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    // Browser router makes context available
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <div>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
