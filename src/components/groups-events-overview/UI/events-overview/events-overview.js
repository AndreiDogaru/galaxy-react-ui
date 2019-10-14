import React from 'react';
import * as Icon from 'react-feather';

import './events-overview.scss';

const events = [
  { 
    id: 1, 
    title: 'How to improve your sales force', 
    numParticipants: 128,
    location: 'Titangade 11, 2200 Copenhagen',
  },
  { 
    id: 2, 
    title: 'How to improve your sales force', 
    numParticipants: 128,
    location: 'Titangade 11, 2200 Copenhagen',
  },
  { 
    id: 3, 
    title: 'How to improve your sales force', 
    numParticipants: 128,
    location: 'Titangade 11, 2200 Copenhagen',
  },
];

const EventsOverview = () => {
  return (
    <div className="card events_card">
      <div className="card_header">
        <Icon.Calendar color="#fff" />
        <p>Upcoming Events</p>
      </div>

      <div className="card_body">
        {events.map((item) => (
          <div key={item.id} className="event_overview_item">
            <div className="event_overview_item-content">
              <p className="event_overview_item-date">Mon, 26 Aug 2019</p>

              <div className="event_overview_item-row">
                <p className="clickable">{item.title}</p>
                <p>09:00</p>
              </div>

              <div className="event_overview_item-row">
                <p>{item.location}</p>
                <p className="focused">{item.numParticipants} people</p>
              </div>
            </div>
            <hr />
          </div>

        ))}
      </div>

      <div className="card_footer">
        <button className="secondary_button">
          <p>Browse Events</p>
        </button>
      </div>
    </div>
  );
};

export default EventsOverview;