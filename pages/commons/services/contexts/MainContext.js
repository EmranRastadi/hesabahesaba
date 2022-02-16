import { createContext, useReducer } from 'react';
import { WINDOW_SIZE } from '../../constant/types';

export const MainContextStore = createContext(null);

const initialState = {
  windowSize: {},
};
export const MainContextProvider = (props) => {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case WINDOW_SIZE:
        return { ...state, windowSize: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContextStore.Provider value={{ state, dispatch }}>
      {props.children}
    </MainContextStore.Provider>
  );
};
