/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';

export const events = [
  {
    id: 1,
    image: 'https://img.freepik.com/premium-vector/vector-happy-holi-festival-greeting-festival-colors-creative-design_727442-1173.jpg',
    date: '20 to 22 February, 2025',
    location: 'Panchagarh',
    title: 'THSP Cultural Fest',
    description: `Experience the vibrant culture at the <a href="https://example.com/cultural-fest" target="_blank" rel="noopener noreferrer">THSP Cultural Fest</a> with performances, art, and more.`,
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-vector/realistic-teachers-day-background_52683-23191.jpg',
    date: '5 March, 2025',
    location: 'Panchagarh',
    title: 'World Teachers’ Day',
    description: `Join us in celebrating <a href="https://example.com/teachers-day" target="_blank" rel="noopener noreferrer">World Teachers’ Day</a> and honor the educators who shape our future.`,
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg',
    date: '7 April, 2025',
    location: 'Panchagarh',
    title: 'Sports Day',
    description: `Get ready for an exciting <a href="https://example.com/sports-day" target="_blank" rel="noopener noreferrer">Sports Day</a> filled with competitions, fun, and team spirit.`,
  },
  {
    id: 4,
    image: 'https://img.freepik.com/free-photo/education-day-arrangement-table_23-2149081014.jpg',
    date: '15 May, 2025',
    location: 'Panchagarh',
    title: 'National Education Day',
    description: `Celebrate <a href="https://example.com/education-day" target="_blank" rel="noopener noreferrer">National Education Day</a> with seminars, exhibitions, and student showcases.`,
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-photo/international-day-yoga-celebration_53876-104986.jpg',
    date: '21 June, 2025',
    location: 'Panchagarh',
    title: 'International Yoga Day',
    description: `Relax and rejuvenate with <a href="https://example.com/yoga-day" target="_blank" rel="noopener noreferrer">International Yoga Day</a> featuring guided sessions and wellness workshops.`,
  },
  {
    id: 6,
    image: 'https://img.freepik.com/free-photo/volunteers-holding-donations-box-charity_53876-24936.jpg',
    date: '12 August, 2025',
    location: 'Panchagarh',
    title: 'Youth Engagement Camp',
    description: `Empower the next generation at our <a href="https://example.com/youth-camp" target="_blank" rel="noopener noreferrer">Youth Engagement Camp</a> with leadership, service, and fun.`,
  }
];

const EventCard = ({ event }) => (
  <Link to={`/event/${event.id}`} className="block">
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto transition transform hover:scale-105 duration-300">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="text-gray-600 text-sm mb-2">
          <span className="flex items-center">
            <span className="mr-2">&#128197;</span> {event.date}
          </span>
          <span className="flex items-center">
            <span className="mr-2">&#x1F4CD;</span> {event.location}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p
          className="text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
        <span className="text-green-600 hover:text-green-800 font-medium">
          Read More →
        </span>
      </div>
    </div>
  </Link>
);

const UpcomingEvents = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
