import Cookies from 'js-cookie';

export const TOKEN_KEY = 'tourhub_auth_token';

export const getAuthToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

export const setAuthToken = (token: string): void => {
  Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Expires in 7 days
};

export const removeAuthToken = (): void => {
  Cookies.remove(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};
