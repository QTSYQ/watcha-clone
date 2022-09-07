import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMovieSection from "../feartures/movie/latest";
import NowPlayingSection from "../feartures/movie/nowPlaying";
import PopularSection from "../feartures/movie/popular";
import TopRateSection from "../feartures/movie/topRate";
import UpcomingSection from "../feartures/movie/upComing";
import styled from "@emotion/styled";
const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

function Mainpage() {
  return (
    <>
      <Header></Header>
      <Main>
        <Container>
          <LatestMovieSection></LatestMovieSection>
          <NowPlayingSection></NowPlayingSection>
          <PopularSection></PopularSection>
          <TopRateSection></TopRateSection>
          <UpcomingSection></UpcomingSection>
        </Container>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default Mainpage;
