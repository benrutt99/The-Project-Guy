import React from "react";
import {
  HeroContainer,
  InnerHeroContainer,
  HeroImage,
  HeadText,
  SubHead,
  GetStartedButton,
} from "./Hero.style";

import HeroImageSrc from "../../../../public/home/hero.jpg";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroImage src={HeroImageSrc} alt='hero' priority />
      <InnerHeroContainer>
        <HeadText>
          Welcome to The <span className='i'>Project Guy</span>
        </HeadText>
        <SubHead>
          Handy Help For Those Small "Honey-Do" Lists Around Your House
        </SubHead>
        <GetStartedButton href='/contact'>Get Started Today</GetStartedButton>
      </InnerHeroContainer>
    </HeroContainer>
  );
}
