import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';

import './groups-overview.scss';

const groups = [
  { id: 1, title: 'Project Managers Global Group', numMembers: 163 },
  { id: 2, title: 'Friday bars', numMembers: 455 },
  { id: 3, title: 'Board Members & Executives', numMembers: 15 },
];

const GroupsOverview = () => {
  const [maxHeight, setMaxHeight] = useState(400);

  const updateDimensionsHandler = () => {
    // set maxHeight for this element to window height - 100px ( that's header heaight + margin top/bottom )
    setMaxHeight(window.innerHeight - 100);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensionsHandler);
    updateDimensionsHandler();
    return () => window.removeEventListener('resize', updateDimensionsHandler);
  }, []);

  return (
    <div className="card groups_card" style={{ maxHeight: maxHeight + 'px' }}>
      <div className="card_header">
        <Icon.Grid color="#fff" />
        <p>Your Groups</p>
      </div>

      <div className="card_body">
        {groups.map((item) => (
          <div key={item.id} className="group_overview_item">
            <Icon.Grid size={35} />
            <div className="group_overview_item-right_side">
              <p>{item.title}</p>
              <p className="group_overview_item-right_side-users">
                {item.numMembers} member{item.numMembers > 1 ? 's' : ''}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card_footer">
        <button className="secondary_button">
          <p>Browse Groups</p>
        </button>
      </div>
    </div>
  );
};

export default GroupsOverview;