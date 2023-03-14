import React from "react";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import {
  NavbarContainer,
  InnerNavbarContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
  ContactButton,
} from "./Navbar.style";

import LogoImage from "../../../public/logo/LogoImage.jpg";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <NavbarContainer>
      <InnerNavbarContainer>
        <NavLink href='/'>
          <LogoContainer>
            <Image src={LogoImage} alt='logo' width={160} height={62} />
          </LogoContainer>
        </NavLink>

        <NavLinkContainer>
          <NavLink href='/' className={currentRoute === "/" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink
            href='/about'
            className={currentRoute === "/about" ? "active" : ""}
          >
            About
          </NavLink>
          <NavLink
            href='/services'
            className={currentRoute === "/services" ? "active" : ""}
          >
            Services
          </NavLink>
          <NavLink
            href='/pricing'
            className={currentRoute === "/pricing" ? "active" : ""}
          >
            Pricing
          </NavLink>
          <ContactButton href='/contact'>Contact</ContactButton>
        </NavLinkContainer>
      </InnerNavbarContainer>
    </NavbarContainer>
  );
}
