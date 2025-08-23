import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import '../css/projectcard.css';

function Works() {
  const navigate = useNavigate();
  const handleClick = (id: number) => navigate(`/project/${id}`);
  return (
    <section className="projects-background " id="works">
      <div className="projects-inner">
        <div className="works-list">
          {projects.map((work) => (
            <div
              key={work.id}
              className="works-item"
              role="button"
              tabIndex={0}
              onClick={() => handleClick(work.id)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(work.id)}
            >
              <div className="works-meta">
                <p className="works-name">{work.name}</p>
                <p className="works-content">{work.overview}</p>
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
