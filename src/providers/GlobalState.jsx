import React from 'react';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const GlobalStateContext = React.createContext();
const GlobalDispatchContext = React.createContext();

const initialState = {
  token: localStorage.getItem('token') || '',
  userId: localStorage.getItem('userId') || '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userId', action.payload.id);
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.id,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        userId: '',
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};

const useGlobalDispatch = () => {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalDispatch must be used within a GlobalProvider');
  }
  return context;
};

export { GlobalProvider, useGlobalState, useGlobalDispatch };
