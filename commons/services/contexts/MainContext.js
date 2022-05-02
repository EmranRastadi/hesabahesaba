import { createContext, useReducer } from 'react';
import {SLICE_ACTIVE, WINDOW_SIZE} from '../../constant/types';

export const MainContextStore = createContext(null);

const initialState = {
  windowSize: {},
  pageActive : 0 // 0 => slider , 1 => customer
};
export const MainContextProvider = (props) => {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case WINDOW_SIZE:
        return { ...state, windowSize: action.payload };
      case SLICE_ACTIVE :
        return {...state , pageActive : action.payload}
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
