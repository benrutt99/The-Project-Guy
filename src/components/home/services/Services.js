import React from "react";

import {
  ServicesHeaderContainer,
  ServicesHeader,
  ServicesContainer,
  ServicesGrid,
  ServicesCard,
  CardImage,
  CardTitle,
  CardDescription,
  CardLink,
} from "./Services.style";

import PaintImageSrc from "../../../../public/home/paint.jpg";
import DecorImageSrc from "../../../../public/home/decor.jpg";
import DrywallImageSrc from "../../../../public/home/drywall.jpg";

export default function Services() {
  return (
    <>
      <ServicesHeaderContainer>
        <ServicesHeader>Services</ServicesHeader>
      </ServicesHeaderContainer>
      <ServicesContainer>
        <ServicesGrid>
          <CardLink href='/services'>
            <ServicesCard>
              <CardImage src={PaintImageSrc} atl='paint' priority />
              <CardTitle>Painting Services</CardTitle>
              <CardDescription>
                Transform your home or business with our expert painting
                services.Whether it is interior or exterior!
              </CardDescription>
            </ServicesCard>
          </CardLink>
          <CardLink href='/services'>
            <ServicesCard>
              <CardImage src={DecorImageSrc} atl='decor' priority />
              <CardTitle>Hang Decor</CardTitle>
              <CardDescription>
                Have a mirror or wall décor? I can help you hang it no matter
                where! No need to worry about it ever falling!
              </CardDescription>
            </ServicesCard>
          </CardLink>
          <CardLink href='/services'>
            <ServicesCard>
              <CardImage src={DrywallImageSrc} atl='drywall' priority />
              <CardTitle>Drywall Repairs</CardTitle>
              <CardDescription>
                Have holes, cracks, or any other damage to your drywall? I can
                repair it quickly and professionally with no mess!
              </CardDescription>
            </ServicesCard>
          </CardLink>
        </ServicesGrid>
      </ServicesContainer>
    </>
  );
}
