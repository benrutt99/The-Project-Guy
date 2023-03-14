import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerNavbarContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1500px;
  flex-grow: 1;
`;

export const LogoContainer = styled.div`
  padding-left: 1rem;
`;

export const NavLinkContainer = styled.div`
  padding-right: 25px;
`;

export const NavLink = styled(Link)`
  color: var(--clr-primary);
  padding: 1.5rem;
  font-size: var(--fs-500);

  &:hover {
    color: HSL(0, 0%, 60%);
  }

  &.active {
    color: HSL(0, 0%, 60%);
    text-decoration: underline;
  }

  @media (max-width: 50em) {
    padding: 0.75rem;
  }
`;

export const ContactButton = styled(Link)`
  background-color: HSL(0, 0%, 20%);
  border-radius: 48px;
  color: white;
  padding: 8px 25px;
  box-sizing: border-box;
  font-size: var(--fs-500);
  margin-left: 10px;

  &:hover {
    background-color: HSL(0, 0%, 60%);
  }
`;
