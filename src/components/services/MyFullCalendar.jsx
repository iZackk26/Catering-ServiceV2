import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Modal, Button, TextInput, Label, Checkbox } from "flowbite-react";

const initialEvents = [
  {
    title: "Seafood Catering",
    start: new Date("2024-04-28T10:00:00"),
    end: new Date("2024-04-28T12:00:00"),
    id: 1,
    package: "Sushi and Sashimi",
    booker: "Hector Caravaca",
    location: "Santa Clara",
    additionalServices: ["Music", "Decoration", "Photography"],
  },
  {
    title: "Seafood Catering",
    start: new Date("2024-04-29T10:00:00"),
    end: new Date("2024-04-29T12:00:00"),
    id: 2,
    package: "Otro paquete",
    booker: "Josue Matamoros",
    location: "Chachagua",
    additionalServices: [],
  },
];

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

  const handleEventClick = ({ event }) => {
    setSelectedEvent(event);
    setEventDetails({
      ...event.extendedProps,
      title: event.title,
      start: event.start.toISOString().substring(0, 16),
      end: event.end.toISOString().substring(0, 16),
      id: event.id,
    });
    setShowModal(true);
  };

  const toggleView = () => {
    setUserView(!userView);
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
    const newEvent = {
      ...eventDetails,
      start: eventDetails.start,
      end: eventDetails.end,
      extendedProps: {
        package: eventDetails.package,
        booker: eventDetails.booker,
        location: eventDetails.location,
        additionalServices: eventDetails.additionalServices,
      },
    };

    if (newEvent.id === null) {
      // Add new event
      newEvent.id = events.length + 1; // Assign an ID
      setEvents([...events, newEvent]);
    } else {
      // Update existing event
      setEvents(
        events.map((event) => (event.id === newEvent.id ? newEvent : event))
      );
    }
    setEditModal(false);
    setShowModal(false);
  };

  const deleteEvent = () => {
    setEvents(events.filter((event) => event.id !== selectedEvent.id));
    setEditModal(false); // Close modal after deleting
  };

  const toggleService = (service) => {
    const index = eventDetails.additionalServices.indexOf(service);
    if (index > -1) {
      setEventDetails({
        ...eventDetails,
        additionalServices: eventDetails.additionalServices.filter(
          (s) => s !== service
        ),
      });
    } else {
      setEventDetails({
        ...eventDetails,
        additionalServices: [...eventDetails.additionalServices, service],
      });
    }
  };

  const serviceOptions = ["Music", "Decoration", "Photography"];

  return (
    <div className="p-4 mx-auto max-w-6xl">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events.map((event) => ({
          ...event,
          title: event.title,
        }))}
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
          <>
            <Button color="success" onClick={handleAddEvent}>
              Add Event
            </Button>
          </>
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
              <strong>Start:</strong> {selectedEvent.start.toDateString()} at{" "}
              {selectedEvent.start.toLocaleTimeString()}
            </p>
            <p>
              <strong>End:</strong> {selectedEvent.end.toDateString()} at{" "}
              {selectedEvent.end.toLocaleTimeString()}
            </p>
            {!userView && (
              <>
                <p>
                  <strong>Package:</strong>{" "}
                  {selectedEvent.extendedProps.package}
                </p>
                <p>
                  <strong>Booker:</strong> {selectedEvent.extendedProps.booker}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {selectedEvent.extendedProps.location}
                </p>
                <p>
                  <strong>Additional Services:</strong>
                </p>
                {serviceOptions.map((service, index) => (
                  <div className="flex my-2 items-center">
                    <Checkbox
                      id={index}
                      checked={eventDetails.additionalServices.includes(
                        service
                      )}
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
                <div className="flex my-2 items-center">
                  <Checkbox
                    id={index}
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
