import { useContext } from 'react';
import { UnreadPostsContext } from '../context/UnreadPostsContext';
import { UnreadPostsContextType } from '../types';

export function useUnreadPosts(): UnreadPostsContextType {
  const context = useContext(UnreadPostsContext);
  
  if (!context) {
    throw new Error('useUnreadPosts must be used within an UnreadPostsProvider');
  }
  
  return context;
}
