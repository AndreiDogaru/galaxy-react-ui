import React, { useState, useEffect } from 'react';

import './groups-events-overview.scss';
import GroupsOverview from './UI/groups-overview/groups-overview';
import EventsOverview from './UI/events-overview/events-overview';

const GroupsEventsOverview = () => {
  const [leftPosition, setLeftPosition] = useState(0);

  const updateDimensionsHandler = () => {
    // position this element under the header profile icon
    const elementRef = document.getElementsByClassName('header_profile_icon')[0];
    const { offsetLeft } = elementRef;
    // offsetLeft is where the header profile icon starts, 40 is its width and 335 is the width of this element
    setLeftPosition(offsetLeft - 335 + 40);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensionsHandler);
    updateDimensionsHandler();
    return () => window.removeEventListener('resize', updateDimensionsHandler);
  }, []);
  
  return (
    <div className="groups_events_container" style={{ left: leftPosition + 'px' }}>
      <GroupsOverview />
      {<EventsOverview /> && false}
    </div>
  );
};

export default GroupsEventsOverview;