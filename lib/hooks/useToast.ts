import { useContext } from 'react';
import { toast as toastApi } from 'components/ui/toast'; // Assuming this is where toast is imported from
import { ToastOptions } from '../types';

// Create a proper wrapper for the toast function
export function useToast() {
  // Directly return toast and the toast object with methods
  return {
    toast: toastApi, // This is the missing toast property
    ...toastApi
  };
}
