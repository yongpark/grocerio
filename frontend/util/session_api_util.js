import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user, success, error) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    success,
    error
  });
};

export const signup = (user, success, error) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user,
    success,
    error
  });
};

export const logout = (success) => {
  return $.ajax({
    method: 'delete',
    url: '/api/session',
    success,
    error: () => {
     console.log( "Logout error in sessionApiUtil#logout" );
   }
  });
};
