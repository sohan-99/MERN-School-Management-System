import { useParams, Link } from 'react-router-dom';
import { events } from './UpcomingEvents';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="p-8 text-center text-red-600">Event not found</div>;
  }

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <Link to="/" className="text-green-600 hover:underline block mb-6">&larr; Back to Events</Link>
      <img
        src={event.detailsImage || event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-2">&#128197; {event.date}</p>
      <p className="text-gray-600 mb-6">&#x1F4CD; {event.location}</p>
      <div
        className="text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: event.fullDescription || event.description }}
      />
    </div>
  );
};

export default EventDetails;
