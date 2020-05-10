import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (accessToken) => {
  return {
    type: SIGN_IN,
    payload: accessToken
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};