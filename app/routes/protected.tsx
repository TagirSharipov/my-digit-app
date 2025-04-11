import type { Route } from './+types/welcome';

import { redirect } from 'react-router';

import { getAuthToken } from '../lib/auth';
import EventCard from '../components/EventCard';

type Event = {
  id: string;
  name: string;
  date: string;
  // Add other fields as needed
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to the protected route!' },
  ];
}

export default function ProtectedRoute({
  loaderData,
}: {
  loaderData: { events: Event[] };
}) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to the protected route!
      </h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Protected route content
      </h2>
      <div className="event-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loaderData.events.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const token = getAuthToken();
  if (token === null) {
    return redirect('/login');
  }

  const response = await fetch('http://localhost:8080/events', {
    method: request.method,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (response.status === 401) {
    return redirect('/login?mode=login');
  }
  if (!response.ok) {
    throw new Response("Can't fetch events", { status: 500 });
  }
  const resData = await response.json();
  return { events: resData.events };
}
