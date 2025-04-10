import { redirect } from 'react-router';
import type { Route } from './+types/logout';

export async function clientAction({ request }: Route.ClientActionArgs) {
  localStorage.removeItem('token');
}
