import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch } from "../../store/AppContext";

import logo from "../../assets/logo.svg";

//#region STYLES
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.7rem;
  color: var(--gray-100);
  background-color: var(--indigo-800);
  border-bottom: 1px solid var(--indigo-900);
  box-shadow: 0 5px 4px -3px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
const BarsMenuButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  font-size: 2rem;
  border-radius: 50%;
  transition: background-color 0.2s;

  :hover {
    background: var(--indigo-700);
  }
  :active {
    background: var(--indigo-900);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;
const Logo = styled.img`
  height: 6rem;
`;
const H1 = styled.h1`
  margin: 0;
  font-size: 1.9rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;
//#endregion

const Header = () => {
  const appDispatch = useAppDispatch();

  const handleToggleMenuVisible = () => {
    appDispatch({ type: "toggle-menu" });
  };

  return (
    <HeaderStyled>
      <BarsMenuButton type="button" onClick={handleToggleMenuVisible}>
        <FontAwesomeIcon icon={faBars} />
      </BarsMenuButton>
      <Title>
        <Logo src={logo} alt="React logo" />
        <H1>Front Awesome</H1>
      </Title>
    </HeaderStyled>
  );
};

export default Header;
