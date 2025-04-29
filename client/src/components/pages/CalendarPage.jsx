/* eslint-disable react-hooks/exhaustive-deps */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState, useEffect } from 'react';

const CalendarPage = () => {
  const today = new Date().toISOString().split('T')[0];

  const fixedHolidays = [
    { title: 'Shab-e-Barat (শবে বরাত)', date: '2025-02-15' },
    { title: 'Language Martyrs’ Day (শহীদ দিবস)', date: '2025-02-21' },
    { title: 'Independence Day (স্বাধীনতা দিবস)', date: '2025-03-26' },
    { title: 'Shab-e-Qadr (শবে কদর)', date: '2025-03-27' },
    { title: 'Jumatul Bidah (জুমাতুল বিদা)', date: '2025-03-28' },
    { title: 'Eid-ul-Fitr Holiday (ঈদুল ফিতর)', date: '2025-03-29' },
    { title: 'Eid-ul-Fitr Holiday (ঈদুল ফিতর)', date: '2025-03-30' },
    { title: 'Eid-ul-Fitr Holiday (ঈদুল ফিতর)', date: '2025-03-31' },
    { title: 'Eid-ul-Fitr Holiday (ঈদুল ফিতর)', date: '2025-04-01' },
    { title: 'Eid-ul-Fitr Holiday (ঈদুল ফিতর)', date: '2025-04-02' },
    { title: 'Bengali New Year (পহেলা বৈশাখ)', date: '2025-04-14' },
    { title: 'May Day (মে দিবস)', date: '2025-05-01' },
    { title: 'Buddha Purnima (বুদ্ধ পূর্ণিমা)', date: '2025-05-11' },
    { title: 'Eid-ul-Adha Holiday (ঈদুল আজহা)', date: '2025-06-05' },
    { title: 'Eid-ul-Adha Holiday (ঈদুল আজহা)', date: '2025-06-06' },
    { title: 'Eid-ul-Adha Holiday (ঈদুল আজহা)', date: '2025-06-07' },
    { title: 'Eid-ul-Adha Holiday (ঈদুল আজহা)', date: '2025-06-08' },
    { title: 'Eid-ul-Adha Holiday (ঈদুল আজহা)', date: '2025-06-09' },
    { title: 'Eid-ul-Adha Holiday (ঈদুল আজহা)', date: '2025-06-10' },
    { title: 'Ashura (আশুরা)', date: '2025-07-06' },
    { title: 'Shuba Janmashtami (শুভ জন্মাষ্টমী)', date: '2025-08-16' },
    { title: 'Eid-e-Milad un-Nabi (ঈদে মিলাদুন্নবী)', date: '2025-09-05' },
    { title: 'Vijaya Dashami (বিজয়া দশমী)', date: '2025-10-02' },
    { title: 'Victory Day (বিজয় দিবস)', date: '2025-12-16' },
    { title: 'Christmas Day (বড়দিন)', date: '2025-12-25' },
  ];

  const generateWeekends = () => {
    const weekends = [];
    const start = new Date('2025-01-01');
    const end = new Date('2025-12-31');

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getDay() === 5 || d.getDay() === 6) {
        weekends.push({
          title: 'Weekend',
          date: d.toISOString().split('T')[0],
          className: 'weekend',
        });
      }
    }

    return weekends;
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const weekends = generateWeekends();
    const combined = [...fixedHolidays, ...weekends];
    const decorated = combined.map((e) => ({
      ...e,
      className:
        e.date === today
          ? 'today-event'
          : e.title === 'Weekend'
          ? 'weekend'
          : 'holiday',
    }));
    setEvents(decorated);
  },[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-rose-100 p-6">
      <div className="bg-white p-4 rounded-xl shadow-xl max-w-6xl mx-auto text-center items-center">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events}
          height="auto"
        />
      </div>
      <style>{`
        .fc .fc-daygrid-day.fc-day-today {
          background-color: #6671d9 !important;
        }

        .today-event {
          background-color: #006400 !important;
          color: white !important;
          font-weight: bold;
          border-radius: 4px;
          padding: 2px 4px;
        }

        .holiday {
          background-color: #facc15 !important;
          color: black !important;
          font-weight: 600;
          border-radius: 4px;
        }

        .weekend {
          background-color: #38bdf8 !important;
          color: white !important;
          font-weight: 500;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default CalendarPage;
