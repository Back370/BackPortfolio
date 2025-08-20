import React from 'react';
import icon from '../../../assets/icon.svg';

interface WorkItem {
  id: number;
  name: string;
  info: string;
  link: string;
}

function Works() {
  const worksData: WorkItem[] = [
    {
      id: 1,
      name: '作品名が入る',
      info: 'Design / Coding(Responsive)',
      link: 'works-template.html',
    },
    {
      id: 2,
      name: '作品名が入る',
      info: 'Design / Coding(Responsive) / WordPress',
      link: 'works-template.html',
    },
    {
      id: 3,
      name: '作品名が入る',
      info: 'Design',
      link: 'works-template.html',
    },
    {
      id: 4,
      name: '作品名が入る',
      info: 'Banner Design',
      link: 'works-template.html',
    },
    {
      id: 5,
      name: '作品名が入る',
      info: 'Banner Design',
      link: 'works-template.html',
    },
  ];

  return (
    <section className="works section" id="works">
      <div className="inner">
        <h2 className="title">works</h2>
        <div className="works-list">
          {worksData.map((work) => (
            <a key={work.id} className="works-item" href={work.link}>
              <p className="works-img">
                <img src={icon} alt="" />
              </p>
              <p className="works-name">{work.name}</p>
              <p className="works-info">{work.info}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
