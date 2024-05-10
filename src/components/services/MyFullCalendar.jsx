import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Modal, Button, TextInput, Label, Checkbox } from "flowbite-react";


const initialEvents = {
  1: {
    title: "Seafood Catering",
    start: new Date("2024-04-28T10:00:00"),
    end: new Date("2024-04-28T12:00:00"),
    id: 1,
    package: "Sushi and Sashimi",
    booker: "Hector Caravaca",
    location: "Santa Clara",
    additionalServices: ["Music", "Decoration", "Photography"],
  },
  2: {
    title: "Seafood Catering",
    start: new Date("2024-04-29T10:00:00"),
    end: new Date("2024-04-29T12:00:00"),
    id: 2,
    package: "Another Package",
    booker: "Josue Matamoros",
    location: "Chachagua",
    additionalServices: [],
  },
  3: {
    title: "Meat Catering",
    start: new Date("2024-04-30T10:00:00"),
    end: new Date("2024-04-30T12:00:00"),
    id: 3,
    package: "Global Tour",
    booker: "Adrian Villalobos",
    location: "San Ramon",
    additionalServices: ["Music", "Photography"],
  },
  4: {
    title: "Meat Catering",
    start: new Date("2024-05-01T10:00:00"),
    end: new Date("2024-05-01T12:00:00"),
    id: 4,
    package: "Luxury Classics",
    booker: "Mauricio Carvajal",
    location: "San Carlos",
    additionalServices: ["Decoration", "Photography"],
  },
  5: {
    title: "Vegetarian Catering",
    start: new Date("2024-05-02T10:00:00"),
    end: new Date("2024-05-02T12:00:00"),
    id: 5,
    package: "Green Garden",
    booker: "Luisa Solis",
    location: "Alajuela",
    additionalServices: ["Music", "Decoration"],
  },
  6: {
    title: "Vegetarian Catering",
    start: new Date("2024-05-03T10:00:00"),
    end: new Date("2024-05-03T12:00:00"),
    id: 6,
    package: "Veggie Soups",
    booker: "Luis Cubillo",
    location: "Santa Rosa de Pocosol",
    additionalServices: ["Decoration", "Photography", "Animation"],
  },
  7: {
    title: "Traditional Catering",
    start: new Date("2024-05-04T10:00:00"),
    end: new Date("2024-05-04T12:00:00"),
    id: 7,
    package: "Caribbean Flavors",
    booker: "Luis Cubillo",
    location: "Pital",
    additionalServices: [],
  },
  8: {
    title: "Traditional Catering",
    start: new Date("2024-05-05T10:00:00"),
    end: new Date("2024-05-05T12:00:00"),
    id: 8,
    package: "Personalized",
    booker: "Andrés Esquivel",
    dishes: ["Pinto", "Tamales", "Pozol", "Ceviche"],
    location: "Los Ángeles de la Fortuna",
    additionalServices: ["Music", "Photography"],
  },
  9: {
    title: "Traditional Catering",
    start: new Date("2024-05-06T10:00:00"),
    end: new Date("2024-05-06T12:00:00"),
    id: 9,
    package: "Personalized",
    booker: "Ramchel Ortiz",
    dishes: ["Gallo Pinto", "Casado de Pollo", "Arroz con Leche"],
    location: "Los Chiles",
    additionalServices: ["Photography"],
  },
  10: {
    title: "Traditional Catering",
    start: new Date("2024-05-07T10:00:00"),
    end: new Date("2024-05-07T12:00:00"),
    id: 10,
    package: "Personalized",
    booker: "Kenny Rodriguez",
    dishes: ["Gallo Pinto", "Casado de Bistec", "Horchata"],
    location: "Santa Clara",
    additionalServices: [],
  },
};


const MyFullCalendar = () => {
  const [events, setEvents] = useState(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userView, setUserView] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    title: "",
    start: "",
    end: "",
    package: "",
    booker: "",
    location: "",
    additionalServices: [],
    id: null,
  });
  
  const toggleView = () => {
    setUserView(!userView);
  };

  const handleEventClick = ({ event }) => {
    const eventInfo = events[event.id];
    setSelectedEvent(eventInfo);
    setEventDetails({
      ...eventInfo,
      start: eventInfo.start.toISOString().substring(0, 16),
      end: eventInfo.end.toISOString().substring(0, 16),
      id: eventInfo.id,
    });
    setShowModal(true);
  };

  const handleAddEvent = () => {
    setEventDetails({
      title: "",
      start: "",
      end: "",
      package: "",
      booker: "",
      location: "",
      additionalServices: [],
      id: null,
    });
    setEditModal(true);
  };

  const handleEditEvent = () => {
    setEditModal(true);
  };

  const saveEvent = () => {
    const { id, ...eventInfo } = eventDetails;
    const newEvent = {
      ...eventInfo,
      start: new Date(eventDetails.start),
      end: new Date(eventDetails.end),
    };

    if (id === null) {
      const newId = Object.keys(events).length + 1;
      setEvents({
        ...events,
        [newId]: { ...newEvent, id: newId },
      });
    } else {
      setEvents({
        ...events,
        [id]: { ...newEvent, id },
      });
    }
    setEditModal(false);
    setShowModal(false);
  };

  const deleteEvent = () => {
    const updatedEvents = { ...events };
    delete updatedEvents[selectedEvent.id];
    setEvents(updatedEvents);
    setShowModal(false);
  };

  const toggleService = (service) => {
    const services = eventDetails.additionalServices.includes(service)
      ? eventDetails.additionalServices.filter((s) => s !== service)
      : [...eventDetails.additionalServices, service];
    setEventDetails({ ...eventDetails, additionalServices: services });
  };

  const serviceOptions = ["Music", "Decoration", "Photography"];

  const renderEventsForCalendar = () => Object.values(events).map(event => ({
    ...event,
    title: event.title,
    start: event.start,
    end: event.end,
  }));

  return (
    <div className="p-4 mx-auto max-w-6xl">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={renderEventsForCalendar()}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        eventClick={handleEventClick}
        fixedWeekCount={false} // No fija el número de semanas
        dayMaxEventRows={4} // Muestra hasta 3 eventos por día en la vista de mes
        views={{
          dayGridMonth: {
            dayMaxEventRows: 3, // Limita el número de filas de días
          },
        }}

      />
      <div className="flex justify-center my-4 gap-2">
        <Button color="info" onClick={toggleView}>
          {userView ? "Switch to Admin View" : "Switch to User View"}
        </Button>
        {!userView && (
          <Button color="success" onClick={handleAddEvent}>
            Add Event
          </Button>
        )}
      </div>
  
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>Event Details</Modal.Header>
          <Modal.Body>
            <p>
              <strong>Title:</strong> {selectedEvent.title}
            </p>
            <p>
              <strong>Start:</strong> {new Date(selectedEvent.start).toDateString()} at{" "}
              {new Date(selectedEvent.start).toLocaleTimeString()}
            </p>
            <p>
              <strong>End:</strong> {new Date(selectedEvent.end).toDateString()} at{" "}
              {new Date(selectedEvent.end).toLocaleTimeString()}
            </p>
            {!userView && (
              <>
                <p>
                  <strong>Package:</strong> {selectedEvent.package}
                </p>
                <p>
                  <strong>Booker:</strong> {selectedEvent.booker}
                </p>
                <p>
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
                <p>
                  <strong>Additional Services:</strong>
                </p>
                {serviceOptions.map((service, index) => (
                  <div key={index} className="flex my-2 items-center">
                    <Checkbox
                      checked={selectedEvent.additionalServices.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    <label className="mx-2 text-sm">{service}</label>
                  </div>
                ))}
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button color="failure" onClick={() => setShowModal(false)}>
              Close
            </Button>
            {!userView && (
              <>
                <Button color="warning" onClick={handleEditEvent}>
                  Edit Event
                </Button>
                <Button color="failure" onClick={deleteEvent}>
                  Delete Event
                </Button>
              </>
            )}
          </Modal.Footer>
        </Modal>
      )}
  
      {editModal && (
        <Modal show={editModal} onClose={() => setEditModal(false)}>
          <Modal.Header>
            {eventDetails.id ? "Edit Event" : "Add Event"}
          </Modal.Header>
          <Modal.Body>
            <div>
              <Label>Title</Label>
              <TextInput
                value={eventDetails.title}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, title: e.target.value })
                }
              />
              <Label>Start</Label>
              <TextInput
                type="datetime-local"
                value={eventDetails.start}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, start: e.target.value })
                }
              />
              <Label>End</Label>
              <TextInput
                type="datetime-local"
                value={eventDetails.end}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, end: e.target.value })
                }
              />
              <Label>Package</Label>
              <TextInput
                value={eventDetails.package}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, package: e.target.value })
                }
              />
              <Label>Booker</Label>
              <TextInput
                value={eventDetails.booker}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, booker: e.target.value })
                }
              />
              <Label>Location</Label>
              <TextInput
                value={eventDetails.location}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, location: e.target.value })
                }
              />
              <Label>Additional Services</Label>
              {serviceOptions.map((service, index) => (
                <div key={index} className="flex my-2 items-center">
                  <Checkbox
                    checked={eventDetails.additionalServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <label className="mx-2 text-sm">{service}</label>
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="success" onClick={saveEvent}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
  
};

export default MyFullCalendar;
