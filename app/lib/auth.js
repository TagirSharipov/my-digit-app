import { get } from 'http';

export function getAuthToken() {
  const token = localStorage.getItem('token');

  return token;
}
export function tokenLoader() {
  return getAuthToken();
}

export function isLoggedIn() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/login');
  }
  return null;
}
