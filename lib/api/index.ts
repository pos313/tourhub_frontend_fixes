import api from './axios';
import { initializeSocket, getSocket, closeSocket } from './socket';
import cityService from '../services/cityService';
import messageService from '../services/messageService';
import userService from '../services/userService';
import directMessageService from '../services/directMessageService';

export {
  api,
  initializeSocket,
  getSocket,
  closeSocket,
  cityService,
  messageService,
  userService,
  directMessageService
};

export default api;
