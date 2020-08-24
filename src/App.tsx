import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { AppProvider } from "./store/AppContext";

import GlobalStyles from "./styles";

//#region STYLES
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Main = styled.main`
  display: flex;
  flex: 1;
`;
//#endregion

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <Home />
        </Main>
        <Footer />
      </Container>
    </AppProvider>
  );
}

export default App;
