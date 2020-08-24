import React, { useReducer, useContext } from "react";
import produce from "immer";

//#region TYPES
interface Joke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at?: string;
  url: string;
  value: string;
}

interface HomeState {
  categories: string[];
  joke: Joke;
}

interface FetchCategories {
  type: "fetch-categories";
  categories: string[];
}
interface FetchJoke {
  type: "fetch-joke";
  joke: Joke;
}

type HomeActionTypes = FetchCategories | FetchJoke;
//#endregion

const initialState: Readonly<HomeState> = {
  categories: [],
  joke: {} as Joke,
};

function reducer(state: HomeState, action: HomeActionTypes) {
  return produce(state, draft => {
    switch (action.type) {
      case "fetch-categories":
        draft.categories = action.categories;
        break;
      case "fetch-joke":
        draft.joke = action.joke;
        break;
    }
  });
}

const DispatchContext = React.createContext<React.Dispatch<HomeActionTypes>>(
  {} as React.Dispatch<HomeActionTypes>
);
const StateContext = React.createContext<HomeState>({} as HomeState);

export const HomeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export function useHomeState() {
  const homeState = useContext(StateContext);

  return homeState;
}

export function useHomeDispatch() {
  const homeDispatch = useContext(DispatchContext);

  return homeDispatch;
}

export function useHomeContext() {
  return [useHomeState(), useHomeDispatch()] as const;
}
