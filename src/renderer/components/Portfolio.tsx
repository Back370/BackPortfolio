import React from 'react';
import { useScrollEffects } from '../hooks/useScrollEffects';
import PageTop from './PageTop';
import ProjectsTimeline from './ProjectsTimeline';

function Portfolio() {
  useScrollEffects();

  return (
    <div className="wrapper">
      <main className="content">
        <ProjectsTimeline />
        <PageTop />
      </main>
    </div>
  );
}

export default Portfolio;
