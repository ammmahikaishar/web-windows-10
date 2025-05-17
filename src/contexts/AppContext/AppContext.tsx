"use client";
import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { IAppContext, AppState, AppReducer } from ".";

const AppContext = createContext(AppState as IAppContext);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): IAppContext {
  return useContext(AppContext);
}
