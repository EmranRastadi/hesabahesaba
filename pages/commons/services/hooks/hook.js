import { useState, useEffect, useContext } from 'react';
import { WINDOW_SIZE } from '../../constant/types';
import { MainContextStore } from '../contexts/MainContext';

const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined';
  const { state, dispatch } = useContext(MainContextStore);
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  // const [windowDimensions, setWindowDimensions] = useState(
  //   getWindowDimensions()
  // );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        dispatch({
          type: WINDOW_SIZE,
          payload: getWindowDimensions(),
        });
        if (document.getElementById('loading')) {
          // document.getElementById('loading').classList.add('deactivate');
        }
      }

      window.addEventListener('load', handleResize);
      return () => window.removeEventListener('load', handleResize);
    }
  }, [hasWindow]);

  return state.windowSize;
};

const useMousePosiotn = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    }
    document.addEventListener('mousemove', handle);
    return () => document.removeEventListener('mousemove', handle);
  });
  return mousePosition;
};

export { useWindowDimensions, useMousePosiotn };
