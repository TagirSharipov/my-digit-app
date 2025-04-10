import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return <div>Welcome to the protected route</div>;
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  if (!localStorage.getItem('token')) {
    console.log('Not authenticated');
    throw new Response('Not authenticated', { status: 401 });
  }
}
