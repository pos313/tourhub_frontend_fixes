# TourHub Frontend TypeScript Fixes

This repository contains fixes for the TypeScript errors found in the `tourhub_frontend_nextjs` project. Here's a summary of the issues and fixes:

## TypeScript Error Fixes

1. **Missing `toast` property in `useToast()` hook**
   - Created a proper `useToast.ts` hook that includes the missing `toast` property

2. **Missing properties in `AuthContextType`**
   - Added `currentUser` and `updateProfile` properties to the `AuthContextType` interface
   - Created proper type definitions in `lib/types.ts`

3. **Missing properties in `UnreadPostsContextType`**
   - Added `markCategorySeen` and `hasUnreadPosts` properties to the interface
   - Created the `useUnreadPosts` hook implementation

4. **Axios type issues**
   - Fixed the Axios interceptor types using `InternalAxiosRequestConfig` instead of `AxiosRequestConfig`
   - Added missing HTTP method functions to the API object

5. **Missing socket functions**
   - Created socket implementation with proper exports
   - Fixed socket context imports
   - Added null checks for the socket instance

## How to Apply These Fixes

1. Copy these files to your project's corresponding locations
2. Make sure to install any required dependencies:
   ```bash
   yarn add js-cookie socket.io-client
   yarn add -D @types/js-cookie
   ```

3. Update your service files to use the properly typed API:
   ```typescript
   // Changed from api.get('/endpoint') to:
   import { api } from '../api';
   
   // Now you can use api.get, api.post etc. without TypeScript errors
   const data = await api.get('/endpoint');
   ```

4. Make sure all hooks are properly imported from their direct source:
   ```typescript
   // Instead of './use-auth'
   import { useAuth } from '../hooks/useAuth';
   ```

## Next Steps

1. Verify that all TypeScript errors have been resolved with:
   ```bash
   yarn tsc --noEmit
   ```

2. Test the application to ensure all functionality works as expected
