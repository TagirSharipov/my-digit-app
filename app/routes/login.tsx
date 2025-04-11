import type { Route } from './+types/login';
import { Welcome } from '../welcome/welcome';
import LoginForm from '~/components/AuthForm';
import { redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Login page' },
  ];
}

export default function Login() {
  return <LoginForm />;
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const searchParams = new URL(request.url).searchParams;
  let mode = searchParams.get('mode');

  if (mode !== 'login' && mode !== 'signup') {
    mode = 'login';
  }

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw new Response('Something went wrong', { status: 500 });
  }

  const responseData = await response.json();
  const { token } = responseData;
  localStorage.setItem('token', token);
  return redirect('/welcome');
}
