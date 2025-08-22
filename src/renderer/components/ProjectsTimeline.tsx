import React from 'react';
import iWidgetkawaii from '../img/widgetkawaii.png';
import iChap from '../img/chap.jpg';
import iCoyote from '../img/coyote.jpg';
import iOekaki from '../img/oekaki.jpg';

interface WorkItem {
  id: number;
  name: string;
  info: string;
  link: string;
  date: string;
  img: string;
}

function Works() {
  const worksData: WorkItem[] = [
    {
      id: 1,
      name: 'CHAP',
      info: 'frontend',
      link: 'works-template.html',
      date: '2025-8-22',
      img: iChap,
    },
    {
      id: 2,
      name: 'Kawaii Widget',
      info: 'frontend, backend',
      link: 'works-template.html',
      date: '2025-8-22',
      img: iWidgetkawaii,
    },
    {
      id: 3,
      name: 'コヨーテAI',
      info: '個人開発',
      link: 'works-template.html',
      date: '2025-8-22',
      img: iCoyote,
    },
    {
      id: 4,
      name: 'その場でおえかきカードゲーム',
      info: 'backend',
      link: 'works-template.html',
      date: '2025-8-22',
      img: iOekaki,
    },
  ];

  return (
    <section className="works section" id="works">
      <div className="inner">
        <h2 className="title">works</h2>
        <div className="works-list">
          {worksData.map((work) => (
            <div key={work.id} className="works-item">
              <p className="works-img">
                <img src={work.img} alt="" />
              </p>
              <p className="works-name">{work.name}</p>
              <p className="works-info">{work.info}</p>
              <p className="works-date">{work.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
