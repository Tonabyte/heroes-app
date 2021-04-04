import React, { useReducer, useEffect } from 'react';

// Routers
import MainRouter from './routes/MainRouter'

// Store
import authenticationReducer from './store/reducers/authenticationReducer';

// Context
import AuthContext from './context/authContext';

const init = () => JSON.parse(localStorage.getItem('user')) || { isLogged: false };

const MainApp = () => {
  const [user, dispatch] = useReducer(authenticationReducer, {}, init);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <div>
      <AuthContext.Provider value={{ user, dispatch }}>
        <MainRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default MainApp;
