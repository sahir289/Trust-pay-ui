/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, useContext, useEffect } from 'react';
import socket from './socket';
import { postApi } from '@/redux-toolkit/api';
import { useNavigate } from 'react-router-dom';

const SocketContext = createContext<typeof socket | null>(null); // Allow null

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    socket.connect();

    // Listen for a message to delete local storage items
    socket.on('forceLogout', () => {
        console.log("Socket called")
      logout();
    });

    return () => {
      socket.off('forceLogout');
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

const logout = async () => {
  const navigate = useNavigate();
  const session_id = sessionStorage.getItem('UserSession');
  if (session_id) {
    await postApi('/auth/logout', { session_id }, true);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
    sessionStorage.removeItem('userSession');
    // Redirect to login page
    navigate('/');
  }
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
