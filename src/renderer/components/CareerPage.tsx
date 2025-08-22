import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from './layouts/index';
import { histories } from '../data/career';
import Career from './Career';
import '../css/career-timeline.css';
import '../css/career.css';

function HistoryPage() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time + 1);
    }, 50);
    return () => clearInterval(id);
  }, [time]);
  return (
    <Layout>
      <section className="career-background">
        <div className={clsx('opacity-0', time && 'about-box')}>
          {histories.about.split('\n').map((l) => (
            <p key={`about-line-${l.slice(0, 20)}`} className="about-paragraph">
              {l}
            </p>
          ))}
        </div>
        <div className="career-timeline">
          <div className="career-timeline__line" aria-hidden="true" />
          {histories.timeline.map((history, i) => (
            <div
              key={`${history.title}-${history.start}`}
              className={`reveal ${i + 1 < time / 5 ? 'is-visible' : ''}`}
            >
              <Career
                start={history.start}
                end={history.end}
                title={history.title}
                content={history.content}
                index={i}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default HistoryPage;
