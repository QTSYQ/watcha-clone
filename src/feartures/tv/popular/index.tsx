import React from "react";
import styled from "@emotion/styled";
import usePopuarTv from "./usePopularTv";
import Card from "../../../components/Card";
import Slider from "../../../components/Slider";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function PopularTvSection() {
  const { data, isLoading } = usePopuarTv();
  const getYear = (date: string) => date.split("-")[0];
  return (
    <>
      <Base>
        <Title>인기 프로그램</Title>
        {isLoading || !data ? (
          <div>Loading...</div>
        ) : (
          <Slider>
            {data.data.results.map((tv) => (
              <Card
                linkUrl={`/tv/${tv.id}`}
                title={tv.name}
                posterpath={`${process.env.REACT_APP_API_IMAGE_PREFIX}/${tv.poster_path}`}
                voteAverage={tv.vote_average}
                year={getYear(tv.first_air_date)}
              ></Card>
            ))}
          </Slider>
        )}
      </Base>
    </>
  );
}
