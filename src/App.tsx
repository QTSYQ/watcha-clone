import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import TvDetail from "./pages/TvDetail";
import Tvpage from "./pages/TvPage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Mainpage />}></Route>
          <Route path="/tv" element={<Tvpage></Tvpage>}></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
          <Route path="/tv/:id" element={<TvDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
