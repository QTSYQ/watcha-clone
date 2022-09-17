import React from "react";
import styled from "@emotion/styled";
import useSimilarMovie from "../useSimilarMovie";

const Base = styled.section`
  padding: 11px 15px;
  border-bottom: 1px solid #ededed;
`;
const HeaderWrapper = styled.div``;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  color: #000;
  font-size: 19px;
  font-weight: 700;
  margin: 8px 0;
`;
const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 15px;
  row-gap: 24px;
`;
const Link = styled.a`
  text-decoration: none;
`;

const CardContainer = styled.div`
  max-width: 140px;
`;
const PosterWrapper = styled.div`
  width: 140px;
  height: 280px;
  border: 1px solid rgba(234, 233, 232);
`;
const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: top;
  object-fit: cover;
`;
const Info = styled.div`
  margin: 5px 10px 0px 0px;
`;
const CardTitle = styled.div`
  color: rgb(41, 42, 40);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VoteAverage = styled.div`
  margin-top: 2px;
  color: rgb(120, 120, 120);
  font-size: 13px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface Props {
  id: string;
}

interface ISimilarMovie {
  id: number;
  posterPath: string;
  title: string;
  voteAverage: number;
}

function SimilarMovie({ id, posterPath, title, voteAverage }: ISimilarMovie) {
  return (
    <Link href={`/movie/${id}`} target="_blank">
      <CardContainer>
        <PosterWrapper>
          <Poster
            src={`${process.env.REACT_APP_API_IMAGE_PREFIX}/${posterPath}`}
          />
        </PosterWrapper>

        <Info>
          <Title>{title}</Title>
          <VoteAverage>{voteAverage}</VoteAverage>
        </Info>
      </CardContainer>
    </Link>
  );
}

export default function Similar({ id }: Props) {
  const { isLoading, data } = useSimilarMovie(id);
  return (
    <>
      <Base>
        <HeaderWrapper>
          <Header>
            <CardTitle>비슷한 작품</CardTitle>
          </Header>
        </HeaderWrapper>
        <ContentsWrapper>
          {isLoading || !data ? (
            <div>Loading...</div>
          ) : (
            data.data.results.map((result) => (
              <SimilarMovie
                id={result.id}
                posterPath={result.poster_path}
                title={result.title}
                voteAverage={result.vote_average}
              ></SimilarMovie>
            ))
          )}
        </ContentsWrapper>
      </Base>
    </>
  );
}
