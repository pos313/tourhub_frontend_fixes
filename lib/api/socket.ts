import { io, Socket } from 'socket.io-client';
import { getAuthToken } from '../utils/auth';

let socketInstance: Socket | null = null;

export const initializeSocket = (): Socket | null => {
  try {
    if (!socketInstance) {
      const token = getAuthToken();
      
      if (!token) {
        console.error('No auth token found for socket connection');
        return null;
      }
      
      socketInstance = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000', {
        auth: {
          token
        },
        autoConnect: false
      });
    }
    
    return socketInstance;
  } catch (error) {
    console.error('Socket initialization error:', error);
    return null;
  }
};

export const getSocket = (): Socket | null => {
  return socketInstance;
};

export const closeSocket = (): void => {
  if (socketInstance) {
    socketInstance.disconnect();
    socketInstance = null;
  }
};

export default {
  initializeSocket,
  getSocket,
  closeSocket
};
