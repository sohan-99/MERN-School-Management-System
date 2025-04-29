import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    image: 'https://img.freepik.com/premium-vector/vector-happy-holi-festival-greeting-festival-colors-creative-design_727442-1173.jpg?ga=GA1.1.1130133801.1723459823&semt=ais_hybrid',
    date: '25 to 27 September, 2024',
    location: 'Panchagarh',
    title: 'THSP Cultural Fest',
    description: `Experience the vibrant culture at the <a href="https://example.com/cultural-fest">THSP Cultural Fest</a> with performances, art, and more.`,
    link: '#'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-vector/realistic-teachers-day-background_52683-23191.jpg?ga=GA1.1.1130133801.1723459823&semt=ais_hybrid',
    date: '2nd October, 2024',
    location: 'Panchagarh',
    title: 'World Teachers Day',
    description: `Join us in celebrating <a href="https://example.com/teachers-day">World Teachers’ Day</a> and honor the educators who shape our future.`,
    link: '#'
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg?size=626&ext=jpg',
    date: '10 November, 2024',
    location: 'Panchagarh',
    title: 'Sports Day',
    description: `Get ready for an exciting <a href="https://example.com/sports-day">Sports Day</a> filled with competitions, fun, and team spirit.`,
    link: '#'
  }


];

const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
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
      <Link to={`/event/${event.id}`} className="text-green-600 hover:text-green-800">
        Read More &rarr;
      </Link>

    </div>
  </div>
);

const UpcomingEvents = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default UpcomingEvents;