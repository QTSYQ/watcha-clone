import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ReactSlider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
interface IProps extends PropsWithChildren {
  settings?: Settings;
}
const ArrowButton = styled.button<{ pos?: "left" | "right" }>`
  padding: 16px;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: gray;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0;
          transform: translate(-50%, -50%);
        `
      : css`
          right: 0;
          transform: translate(50%, -50%);
        `}
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    color: #222;
  }
`;

const DEFAULT_SETTINGS: Settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos></MdArrowBackIos>
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos></MdArrowForwardIos>
    </ArrowButton>
  ),
};

export default function Slider({
  settings = DEFAULT_SETTINGS,
  children,
}: IProps) {
  return <ReactSlider {...settings}>{children}</ReactSlider>;
}
