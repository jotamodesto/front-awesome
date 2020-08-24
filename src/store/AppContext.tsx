import React, { useReducer } from "react";
import { produce } from "immer";

//#region TYPES
interface AppState {
  menuVisible: boolean;
}

interface ToggleMenu {
  type: "toggle-menu";
}

type AppActionTypes = ToggleMenu;
//#endregion

const initialState: Readonly<AppState> = {
  menuVisible: false,
};

function reducer(state: AppState, action: AppActionTypes) {
  return produce(state, draft => {
    switch (action.type) {
      case "toggle-menu":
        draft.menuVisible = !draft.menuVisible;
        break;
    }
  });
}

const DispatchContext = React.createContext<React.Dispatch<AppActionTypes>>(
  {} as React.Dispatch<AppActionTypes>
);
const StateContext = React.createContext<AppState>({} as AppState);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export function useAppState() {
  const appState = React.useContext(StateContext);

  return appState;
}

export function useAppDispatch() {
  const dispatch = React.useContext(DispatchContext);

  return dispatch;
}

export function useAppContext() {
  return [useAppState(), useAppDispatch()] as const;
}
