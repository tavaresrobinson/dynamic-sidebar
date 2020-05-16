import React from 'react';
import useGlobalHook, {Store} from 'use-global-hook';

interface State {
  isLoading: boolean;
  isAuthenticated: boolean;
}

type Action = {
  setIsLoading: (isLoading: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const initialState: State = {
  isLoading: false,
  isAuthenticated: false,
};

const actions = {
  setIsLoading: (store: Store<State, Action>, isLoading: boolean) => {
    store.setState({...store.state, isLoading});
  },
  setIsAuthenticated: (store: Store<State, Action>,
      isAuthenticated: boolean) => {
    store.setState({...store.state, isAuthenticated});
  },
};

const useGlobal = useGlobalHook<State, Action>(React, initialState, actions);

export default useGlobal;
