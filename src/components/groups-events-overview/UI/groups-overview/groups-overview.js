import React from 'react';
import * as Icon from 'react-feather';

import './groups-overview.scss';

const groups = [
  { id: 1, title: 'Project Managers Global Group', numMembers: 163 },
  { id: 2, title: 'Friday bars', numMembers: 455 },
  { id: 3, title: 'Board Members & Executives', numMembers: 15 },
];

const GroupsOverview = () => {
  return (
    <div className={"card groups_card"}>
      <div className="card_header">
        <Icon.Grid />
        <p>Your Groups</p>
      </div>

      <div className="card_body">
        {groups.map((item) => (
          <div key={item.id} className="group_overview_item">
            <Icon.Grid />
            <div className="group_overview_item-right_side">
              <p>{item.title}</p>
              <p className="group_overview_item-right_side-users">
                {item.numMembers} member{item.numMembers > 1 ? 's' : ''}
              </p>
            </div>
          </div>
        ))}

        <button className="secondary_button">
          <p>Browse Groups</p>
        </button>
      </div>
    </div>
  );
};

export default GroupsOverview;