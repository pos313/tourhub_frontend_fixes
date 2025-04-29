import React, { createContext, useContext, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { initializeSocket, closeSocket } from '../api/socket'; // Fixed import path
import { useAuth } from '../hooks/useAuth';

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false
});

export const useSocket = () => useContext(SocketContext);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socketInstance, setSocketInstance] = useState<Socket | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      const socket = initializeSocket();
      setSocketInstance(socket);
    } else {
      closeSocket();
      setSocketInstance(null);
      setConnected(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!socketInstance) return;

    const onConnect = () => {
      console.log('Socket connected');
      setConnected(true);
    };

    const onDisconnect = () => {
      console.log('Socket disconnected');
      setConnected(false);
    };

    const onError = (error: any) => {
      console.error('Socket error:', error);
    };

    // Only connect and add listeners if socketInstance exists
    if (socketInstance) {
      socketInstance.connect();
      socketInstance.on('connect', onConnect);
      socketInstance.on('disconnect', onDisconnect);
      socketInstance.on('error', onError);
      
      // Set initial connection state
      setConnected(socketInstance.connected);
    }

    return () => {
      if (socketInstance) {
        socketInstance.off('connect', onConnect);
        socketInstance.off('disconnect', onDisconnect);
        socketInstance.off('error', onError);
      }
    };
  }, [socketInstance]);

  return (
    <SocketContext.Provider value={{ socket: socketInstance, isConnected: connected }}>
      {children}
    </SocketContext.Provider>
  );
};
