import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMovieSection from "../feartures/movie/latest";
import NowPlayingSection from "../feartures/movie/nowPlaying";
function Mainpage() {
  return (
    <>
      <Header></Header>
      <LatestMovieSection></LatestMovieSection>
      <NowPlayingSection></NowPlayingSection>
      <Footer></Footer>
    </>
  );
}

export default Mainpage;
