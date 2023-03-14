import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const InnerHeroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  position: relative;
  box-sizing: border-box;

  max-width: 1500px;
  flex-grow: 1;
  height: 80vh;

  @media (max-width: 1550px) {
    padding: 0 20px;
  }
`;

export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

export const HeadText = styled.h1`
  font-size: var(--fs-xl);
  color: var(--clr-primary);
  line-height: 1.4;
  text-align: center;
  font-weight: 700;

  .i {
    color: hsl(31, 36%, 49%);
  }
`;

export const SubHead = styled.h2`
  font-size: var(--fs-400);
  text-align: center;
`;

export const GetStartedButton = styled(Link)`
  background-color: HSL(0, 0%, 20%);
  border-radius: 48px;
  color: white;
  padding: 8px 25px;
  box-sizing: border-box;
  font-size: var(--fs-400);
  align-items: center;
  align-self: center;
  margin-top: 10px;

  &:hover {
    background-color: HSL(0, 0%, 40%);
    transform: scale(1.03);
    transition: all 0.8s ease;
  }
`;
