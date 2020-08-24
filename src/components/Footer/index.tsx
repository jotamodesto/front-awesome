import React from "react";
import styled from "styled-components";

//#region STYLES
const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: var(--indigo-100);
`;
const P = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: var(--gray-600);
`;
const Link = styled.a`
  text-decoration: underline;
`;
//#endregion

const Footer = () => {
  return (
    <FooterStyled className="flex justify-center p-2">
      <P className="text-xs text-gray-600">
        Powered by{" "}
        <Link
          href="https://api.chucknorris.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          api.chucknorris.io
        </Link>
      </P>
    </FooterStyled>
  );
};

export default Footer;
