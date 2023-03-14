import React from "react";
import {
  Container,
  InnerContainer,
  Card,
  ImageContainer,
  AboutHead,
  AboutText,
  GetStartedButton,
} from "./AboutBen.style";

import BenImageSrc from "../../../public/home/ben.jpg";

export default function About() {
  return (
    <>
      <Container>
        <InnerContainer>
          <Card>
            <ImageContainer src={BenImageSrc} atl='ben' priority />
          </Card>
          <Card>
            <AboutHead>Hi I'm Ben The Project Guy</AboutHead>
            <AboutText>
              Hi there! I'm Ben, and I'm the handyman behind The Project Guy.
              With 5 years of experience, I offer reliable, high-quality
              services for all your home or business repair and renovation
              needs. From small repairs to big projects, I'm versatile and
              adaptable, and I pride myself on providing exceptional service to
              my community in San Diego. Trust and communication are key to my
              work, and I'm committed to keeping you informed and involved every
              step of the way. So if you need help with anything from fixing a
              leaky faucet to building custom cabinets, give me a call today.
              Let's work together to finish that "honey-do" list that's been
              sitting around!
            </AboutText>
            <GetStartedButton href='/contact'>
              Get Started Today
            </GetStartedButton>
          </Card>
        </InnerContainer>
      </Container>
    </>
  );
}

// https://www.yelp.com/biz/the-project-guy-san-marcos?osq=the+project+guy
