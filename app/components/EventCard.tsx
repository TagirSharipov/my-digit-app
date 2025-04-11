import React from 'react';

interface Event {
  title: string;
  image: string;
  date: string;
  description: string;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="event-card bg-white shadow-md rounded-lg overflow-hidden">
      <div className="event-details p-4">
        <h3 className="event-title text-lg font-bold text-gray-800 mb-2">
          {event.title}
        </h3>
        <p className="event-date text-sm text-gray-500 mb-4">
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="event-description text-gray-700">{event.description}</p>
      </div>
    </div>
  );
}
