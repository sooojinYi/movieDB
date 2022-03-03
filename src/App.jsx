import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import Watched from "./pages/Watched";
import WatchList from "./pages/WatchList";
import Add from "./pages/Add";

import { GlobalProvider } from "./context/GlobalState";

export function App() {
  return (
    <main>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </GlobalProvider>
    </main>
  );
}

export default App;
