import React from 'react';

import './home.scss';
import Post from '../../components/UI/post/post';

const postList = [
  {
    id: 1,
    groupName: 'Project Managers for South and East Region',
    text: `Compellingly empower user-centric web services rather than frictionless materials. Compellingly build functional leadership skills and distributed solutions. Rapidiously e-enable unique applications vis-a-vis next-generation content. Energistically embrace bricks-and-clicks schemas for next-generation e-tailers. Efficiently implement cost effective relationships through holistic catalysts for change.

      Progressively incentivize compelling results through cross-unit manufactured products. Globally evisculate resource maximizing synergy rather than flexible vortals. Dynamically e-enable highly efficient metrics rather than mission-critical catalysts for change. Objectively reintermediate exceptional testing procedures through leveraged infrastructures.`,
    images: [],
  },
  {
    id: 2,
    groupName: 'Project Managers for South and East Region',
    text: `Compellingly empower user-centric web services rather than frictionless materials. Compellingly build functional leadership skills and distributed solutions. Rapidiously e-enable unique applications vis-a-vis next-generation content. Energistically embrace bricks-and-clicks schemas for next-generation e-tailers. Efficiently implement cost effective relationships through holistic catalysts for change.

      Progressively incentivize compelling results through cross-unit manufactured products. Globally evisculate resource maximizing synergy rather than flexible vortals. Dynamically e-enable highly efficient metrics rather than mission-critical catalysts for change. Objectively reintermediate exceptional testing procedures through leveraged infrastructures.`,
    images: [
      '/images/1.jpg',
    ],
  },
  {
    id: 3,
    groupName: 'Project Managers for South and East Region',
    text: `Compellingly empower user-centric web services rather than frictionless materials. Compellingly build functional leadership skills and distributed solutions. Rapidiously e-enable unique applications vis-a-vis next-generation content. Energistically embrace bricks-and-clicks schemas for next-generation e-tailers. Efficiently implement cost effective relationships through holistic catalysts for change.

      Progressively incentivize compelling results through cross-unit manufactured products. Globally evisculate resource maximizing synergy rather than flexible vortals. Dynamically e-enable highly efficient metrics rather than mission-critical catalysts for change. Objectively reintermediate exceptional testing procedures through leveraged infrastructures.`,
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
      '/images/2.jpg',
    ],
  },
];

const Home = () => {
  return (
    <div className="home_container">
      {postList.map((item) => 
        <Post key={item.id} data={item} />
      )}
    </div>
  );
};

export default Home;