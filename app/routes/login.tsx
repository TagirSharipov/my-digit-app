import type { Route } from './+types/home';
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

export async function action({ request }: Route.ActionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode');
  if (mode !== 'login' && mode !== 'signup') {
    throw new Response('Invalid mode', { status: 422 });
  }

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  console.log('Username:', password);
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  console.log('Response:', response);
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw new Response('Something went wrong', { status: 500 });
  }
  return redirect('/welcome');
}

//TODO validation, error handling, protected route
