import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { useDebouncedFn } from "beautiful-react-hooks";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

import api from "../../service/api";

import Sidebar from "../../components/Sidebar";
import { useAppDispatch } from "../../store/AppContext";
import { HomeProvider, useHomeContext } from "./HomeContext";

//#region STYLES;
const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-height: 100%;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.7rem 3rem;
`;
const FactCategory = styled.h3`
  margin-bottom: 1.5rem;
  color: var(--indigo-900);

  span {
    text-transform: capitalize;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 15rem;
  border: 1px solid var(--indigo-800);
  border-radius: 4px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;
const Quote = styled.blockquote`
  padding-left: 0.5rem;
  margin: 1rem;
  border-left: 5px solid var(--indigo-900);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
const CardButton = styled.button`
  display: block;
  width: 100%;
  height: 4.2rem;
  font-weight: bold;
  color: var(--gray-100);
  background: var(--indigo-800);
  border-radius: 0;
  transition: background-color 0.2s;

  :hover {
    background: var(--indigo-700);
  }
  :active {
    background: var(--indigo-900);
  }
`;
//#endregion

const Content = () => {
  const [homeState, homeDispatch] = useHomeContext();
  const appDispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  const loadJoke = useCallback(
    async (category?: string) => {
      setLoading(true);
      const response = await api.get("random", { params: { category } });

      homeDispatch({ type: "fetch-joke", joke: response.data });
      setLoading(false);
    },
    [homeDispatch]
  );
  const debouncedLoadJoke = useDebouncedFn(loadJoke, 350);

  useEffect(() => {
    (async () => {
      const response = await api.get("categories");
      homeDispatch({
        type: "fetch-categories",
        categories: response.data,
      });
    })();
  }, [homeDispatch]);

  useEffect(() => {
    loadJoke();
  }, [loadJoke]);

  const handleCategoryClick = async (category: string) => {
    await debouncedLoadJoke(category);
    appDispatch({ type: "toggle-menu" });
  };

  const handlePickAnother = (category?: string) => () => {
    debouncedLoadJoke(category);
  };

  return (
    <Container>
      <Sidebar
        items={homeState.categories}
        itemSelected={homeState.joke.categories && homeState.joke.categories[0]}
        onItemClick={handleCategoryClick}
      />
      <ContentContainer>
        <ReactPlaceholder
          type="textRow"
          ready={!loading}
          delay={1000}
          style={{ marginBottom: "1.5rem", width: "99%" }}
        >
          <FactCategory>
            Fatos de Chuck Norris{" "}
            {homeState.joke.categories && homeState.joke.categories[0] && (
              <>
                em <span>"{homeState.joke.categories[0]}"</span>
              </>
            )}
          </FactCategory>
        </ReactPlaceholder>

        <Card data-testid="joke-card">
          <ReactPlaceholder
            showLoadingAnimation
            ready={!loading}
            delay={1000}
            style={{ margin: "1rem", paddingRight: "2rem", height: "5rem" }}
          >
            <Quote cite={homeState.joke.url}>
              <p>{homeState.joke.value}</p>
            </Quote>
            <CardButton
              type="button"
              onClick={handlePickAnother(
                homeState.joke.categories && homeState.joke.categories[0]
              )}
            >
              Carregar outro
            </CardButton>
          </ReactPlaceholder>
        </Card>
      </ContentContainer>
    </Container>
  );
};

const Home = () => {
  return (
    <HomeProvider>
      <Content />
    </HomeProvider>
  );
};

export default Home;
