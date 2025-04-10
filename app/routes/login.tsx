import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import LoginForm from '~/components/AuthForm';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Login page' },
  ];
}

export default function Login() {
  return <LoginForm />;
}
