import React from 'react';

import './home.scss';
import Post from '../../components/UI/post/post';

const postList = [
  {
    id: 1,
    groupName: 'Project Managers for South and East Region',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec q.',
    images: [],
    files: [
      { id: 1, name: 'Final Statement.pdf' },
      { id: 2, name: 'Final Statement - v2.pdf' },
    ],
  },
  {
    id: 2,
    groupName: 'Project Managers for South and East Region',
    text: `Compellingly empower user-centric web services rather than frictionless materials. Compellingly build functional leadership skills and distributed solutions. Rapidiously e-enable unique applications vis-a-vis next-generation content. Energistically embrace bricks-and-clicks schemas for next-generation e-tailers. Efficiently implement cost effective relationships through holistic catalysts for change.

      Progressively incentivize compelling results through cross-unit manufactured products. Globally evisculate resource maximizing synergy rather than flexible vortals. Dynamically e-enable highly efficient metrics rather than mission-critical catalysts for change. Objectively reintermediate exceptional testing procedures through leveraged infrastructures.`,
    images: [
      { id: 1, name: '/images/1.jpg' },
    ],
    files: [
      { id: 1, name: 'andrei-dogaru-serban-cv-2019-10-15.pdf' },
    ],
  },
  {
    id: 3,
    groupName: 'Project Managers for South and East Region',
    text: `Compellingly empower user-centric web services rather than frictionless materials. Compellingly build functional leadership skills and distributed solutions. Rapidiously e-enable unique applications vis-a-vis next-generation content. Energistically embrace bricks-and-clicks schemas for next-generation e-tailers. Efficiently implement cost effective relationships through holistic catalysts for change.

      Progressively incentivize compelling results through cross-unit manufactured products. Globally evisculate resource maximizing synergy rather than flexible vortals. Dynamically e-enable highly efficient metrics rather than mission-critical catalysts for change. Objectively reintermediate exceptional testing procedures through leveraged infrastructures.`,
    images: [
      { id: 1, name: '/images/1.jpg' },
      { id: 2, name: '/images/2.jpg' },
      { id: 3, name: '/images/3.jpg' },
      { id: 4, name: '/images/4.jpg' },
      { id: 5, name: '/images/2.jpg' },
    ],
    files: [],
  },
];

const Home = () => (
  <div className="home_container">
    {postList.map((item) => <Post key={item.id} data={item} />)}
  </div>
);

export default Home;
