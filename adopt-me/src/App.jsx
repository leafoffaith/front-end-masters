import React from "react";
import { useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdoptedPetContext from "./AdoptedPetContext";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

//test

//limit useEffect in React <= secret to good react code
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // how long do you want to cache something?
      // for 10mins you would need to 1000 * 60 * 10
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    // Browser router makes context available
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          {/* <h1>Adopt Me!</h1> */}
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
