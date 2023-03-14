import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const HeaderContainer = styled.div`
  background-color: var(--clr-primary);
  height: 8em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadText = styled.h1`
  color: white;
  font-weight: 600;
  font-size: var(--fs-800);
  text-align: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const ContentGrid = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  grid-gap: 10em;
  justify-content: center;

  @media (max-width: 965px) {
    grid-gap: 3em;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const AboutImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 480px) {
    object-fit: cover;
    object-position: 50% 60%;
  }
`;

export const AboutText = styled.p`
  /* font-size: clamp(var(--fs-300), 2vw, var(--fs-600)); */
  line-height: 1.7;
  font-size: var(--fs-500);
  color: var(--clr-primary);
  text-align: center;
`;

export const AboutButton = styled(Link)`
  background-color: HSL(0, 0%, 20%);
  border-radius: 48px;
  color: white;
  padding: 8px 25px;
  font-size: var(--fs-500);
  align-items: center;
  align-self: center;
  margin-top: 20px;

  &:hover {
    background-color: HSL(0, 0%, 40%);
    transform: scale(1.03);
    transition: all 0.8s ease;
  }
`;
