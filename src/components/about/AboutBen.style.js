import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 25px;
`;

export const InnerContainer = styled.div`
  max-width: 1500px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  height: 75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  object-position: 50% 30%;
`;

export const AboutHead = styled.h1`
  font-size: var(--fs-900);
  color: var(--clr-primary);
  text-align: center;
  padding-top: 8px;
  margin-bottom: 15px;
`;

export const AboutText = styled.p`
  font-size: var(--fs-500);
  text-align: center;
  padding: 10px 10px 3px 10px;
  line-height: 1.2;
  color: var(--clr-primary);
  line-height: 2.5rem;
`;

export const GetStartedButton = styled(Link)`
  background-color: HSL(0, 0%, 20%);
  border-radius: 48px;
  color: white;
  padding: 8px 25px;
  box-sizing: border-box;
  font-size: var(--fs-500);
  align-items: center;
  align-self: center;
  margin-top: 10px;

  &:hover {
    background-color: HSL(0, 0%, 40%);
    transform: scale(1.03);
    transition: all 0.8s ease;
  }
`;
