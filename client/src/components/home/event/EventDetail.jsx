import { useParams, Link } from 'react-router-dom'; 

const events = [
  {
    id: 1,
    image: 'https://img.freepik.com/premium-photo/drawing-people-traditional-dress-with-carnival-background_655090-3097446.jpg?ga=GA1.1.1130133801.1723459823&semt=ais_hybrid',
    date: '25 to 27 September, 2024',
    location: 'Panchagarh',
    title: 'THSP Cultural Fest',
    description: `The THSP Cultural Fest is a vibrant celebration of diversity, creativity, and tradition...`,
    link: '#'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-vector/flat-illustration-world-teacher-s-day_23-2150800168.jpg?ga=GA1.1.1130133801.1723459823&semt=ais_hybrid',
    date: '2nd October, 2024',
    location: 'Panchagarh',
    title: 'World Teachers’ Day',
    description: `World Teachers' Day, celebrated annually on October 5th, honors the vital role teachers play...`,
    link: '#'
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148997527.jpg?size=626&ext=jpg',
    date: '10 November, 2024',
    location: 'Panchagarh',
    title: 'Sports Day',
    description: `Our school’s annual Sports Day is a celebration of athleticism, teamwork, and school spirit...`,
    link: '#'
  }
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto">
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
        </div>
        <Link to='/events' className="text-green-600 hover:text-green-800" aria-label="Back to events list">
          Back to Events &rarr;
        </Link>
      </div>
    </div>
  );
};

export default EventDetail;
