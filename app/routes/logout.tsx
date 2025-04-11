import { Navigate, redirect } from 'react-router';

export async function clientLoader() {
  localStorage.removeItem('token');
  redirect('/login');
  return null;
}
export default function Logout() {
  return <Navigate to="/login" />;
}
