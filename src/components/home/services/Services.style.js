import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ServicesHeaderContainer = styled.div`
  background-color: var(--clr-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  flex-grow: 1;
  height: 8em;
  width: 100%;

  /* @media (max-width: 1550px) {
    padding: 0 20px;
  } */
`;

export const ServicesHeader = styled.h1`
  color: white;
  font-weight: 600;
  font-size: var(--fs-800);
  text-align: center;
`;

export const ServicesContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const ServicesGrid = styled.div`
  max-width: 1500px;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(270px, max-content)); */
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  grid-gap: 5em;
  justify-content: center;

  @media (max-width: 965px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  height: 38rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:hover {
    transform: scale(1.03);
    transition: all 0.8s ease;
    background-color: HSL(0, 0%, 70%);
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 69%;

  @media (max-width: 965px) {
    width: 100%;
    object-fit: cover;
    object-position: 50% 60%;
    top: 0;
    left: 0;
  }
`;

export const CardTitle = styled.h1`
  font-size: var(--fs-600);
  color: var(--clr-primary);
  text-align: center;
  padding-top: 8px;
`;

export const CardDescription = styled.p`
  font-size: var(--fs-400);
  text-align: center;
  padding: 10px 10px 3px 10px;
  line-height: 1.2;
  color: var(--clr-primary);
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;
