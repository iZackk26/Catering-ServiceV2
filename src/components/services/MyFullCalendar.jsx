import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import addDays from 'date-fns/addDays';
import { Modal, Button } from 'flowbite-react';


const today = new Date();
const cateringServices = [
  {
    title: "Seafood Catering",
    start: addDays(today, 1),
    end: addDays(today, 1),
    id: 1,
    description: "Enjoy a delicious grilled lobster, freshly prepared.",
    package: "Sushi and Sashimi",
    booker: "Hector Caravaca",
    location: "Santa Clara",
    

  },
  {
    title: "Seafood Catering",
    start: addDays(today, 2),
    end: addDays(today, 2),
    id: 2,
    description: "Taste our exotic shrimp and pineapple skewers.",
    package: "Otro paquete",
    booker: "Josue Matamoros",
    location: "Chachagua",
    
  },
  // Agrega otros eventos aquí
];

const MyFullCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = ({ event }) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <b>{eventInfo.event.title}</b>
      </div>
    );
  };

  return (
    <div className="p-4 mx-auto max-w-6xl max-h-6xl"> {/* Ajustado para un tamaño mediano */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={cateringServices}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        eventClick={handleEventClick}
        fixedWeekCount={false} // No fija el número de semanas
        dayMaxEventRows={4} // Muestra hasta 3 eventos por día en la vista de mes
        views={{
          dayGridMonth: {
            dayMaxEventRows: 3 // Limita el número de filas de días
          }
        }}
        eventContent={renderEventContent} // Utiliza esta función para personalizar el contenido del evento
      />
      {selectedEvent && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>
            {selectedEvent.title}
          </Modal.Header>
          <Modal.Body>
            <h1>{selectedEvent.extendedProps.package}</h1>
            <p>{selectedEvent.extendedProps.description}</p>
            <p>Booked by: {selectedEvent.extendedProps.booker}</p>
            <p>Location: {selectedEvent.extendedProps.location}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default MyFullCalendar;
