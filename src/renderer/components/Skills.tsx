import React from 'react';
import icon from '../../../assets/icon.svg';

interface Skill {
  id: number;
  name: string;
  description: string;
}

function Skills() {
  const skillsData: Skill[] = [
    {
      id: 1,
      name: 'HTML5/CSS3',
      description:
        'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。',
    },
    {
      id: 2,
      name: 'WordPress',
      description:
        'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。',
    },
    {
      id: 3,
      name: 'JavaScript',
      description:
        'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。',
    },
    {
      id: 4,
      name: 'Photoshop',
      description:
        'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。',
    },
    {
      id: 5,
      name: 'Illustrator',
      description:
        'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。',
    },
    {
      id: 6,
      name: 'XD',
      description:
        'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。',
    },
  ];

  return (
    <section className="skill section" id="skill">
      <div className="inner">
        <h2 className="title">skill</h2>
        <div className="skill-list">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-item">
              <p className="skill-img">
                <img src={icon} alt="" />
              </p>
              <div className="skill-body">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-text">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
