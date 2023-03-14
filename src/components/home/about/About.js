import React from "react";

import {
  HeaderContainer,
  HeadText,
  ContentContainer,
  ContentGrid,
  AboutImage,
  ContentCard,
  AboutText,
  AboutButton,
} from "./About.styles";

import PaintImageSrc from "../../../../public/home/ben.jpg";

export default function About() {
  return (
    <>
      <HeaderContainer>
        <HeadText>About Me</HeadText>
      </HeaderContainer>
      <ContentContainer>
        <ContentGrid>
          <ContentCard>
            <AboutImage src={PaintImageSrc} atl='ben' priority />
          </ContentCard>
          <ContentCard>
            <AboutText>
              Hi there! I'm Ben, and I'm the handyman behind The Project Guy.
              With 5 years of experience, I offer reliable, high-quality
              services for all your home or business repair and renovation
              needs. Let's work together to finish that "honey-do" list that's
              been sitting around!
            </AboutText>
            <AboutButton href='/about'>About Me</AboutButton>
          </ContentCard>
        </ContentGrid>
      </ContentContainer>
    </>
  );
}
