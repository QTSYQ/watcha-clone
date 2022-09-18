import styled from "@emotion/styled";
import React from "react";

const Base = styled.div`
  padding: 12px 15px;
  border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #ff2f6e;
`;

const Title = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin: 8px 0;
`;

const Summary = styled.div`
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const MoreSee = styled.div``;

interface IProps {
  title: string;
  year: string;
  genres: string;
  overview: string;
}

export default function DefaultInfo(props: IProps) {
  return (
    <Base>
      <HeaderWrapper>
        <Header>
          <Title>{props.title}</Title>
          <Link href="/overview">
            <MoreSee>더보기</MoreSee>
          </Link>
        </Header>
        <Summary>
          {props.title} <br />
          {props.year} {props.genres} <br />
          <br />
          <br />
          {props.overview}
        </Summary>
      </HeaderWrapper>
    </Base>
  );
}
