import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AiringTodayTvSection from "../feartures/tv/airingToday";
import LatestTvSection from "../feartures/tv/latest";
import OnTheAirTvSection from "../feartures/tv/onTheAir";
import PopularTvSection from "../feartures/tv/popular";
import TopRateTvSection from "../feartures/tv/topRate";

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

function Tvpage() {
  return (
    <>
      <Header></Header>
      <Main>
        <Container>
          <LatestTvSection></LatestTvSection>
          <AiringTodayTvSection></AiringTodayTvSection>
          <OnTheAirTvSection></OnTheAirTvSection>
          <PopularTvSection></PopularTvSection>
          <TopRateTvSection />
        </Container>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default Tvpage;
