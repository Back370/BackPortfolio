import React from 'react';
import iWidgetkawaii from '../img/widgetkawaii.png';
import iChap from '../img/chap.jpg';
import iCoyote from '../img/coyote.jpg';
import iOekaki from '../img/oekaki.jpg';
import '../css/projectcard.css';

interface WorkItem {
  id: number;
  name: string;
  info: string;
  link: string;
  date: string;
  img: string;
  content: string;
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
      content: 'テストコンテンツ',
    },
    {
      id: 2,
      name: 'Kawaii Widget',
      info: 'frontend, backend',
      link: 'works-template.html',
      date: '2025-8-22',
      img: iWidgetkawaii,
      content: 'テストコンテンツ',
    },
    {
      id: 3,
      name: 'コヨーテAI',
      info: '個人開発',
      link: 'works-template.html',
      date: '2025-8-22',
      img: iCoyote,
      content: 'テストコンテンツ',
    },
    {
      id: 4,
      name: 'その場でおえかきカードゲーム',
      info: 'backend',
      link: 'works-template.html',
      date: '2025-8-22',
      img: iOekaki,
      content: 'テストコンテンツ',
    },
  ];

  return (
    <section className="projects-background " id="works">
      <div className="projects-inner">
        <div className="works-list">
          {worksData.map((work) => (
            <div key={work.id} className="works-item">
              <div className="works-meta">
                <p className="works-name">{work.name}</p>
                <p className="works-content">{work.content}</p>
                <div className="works-meta-row">
                  <span className="works-date">{work.date}</span>
                  <span className="works-info">{work.info}</span>
                </div>
              </div>
              <div className="works-img">
                <img src={work.img} alt={work.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
