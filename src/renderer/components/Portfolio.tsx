import React from 'react';
import { useScrollEffects } from '../hooks/useScrollEffects';
import PageTop from './PageTop';

function Portfolio() {
  useScrollEffects();

  return (
    <div className="wrapper">
      <main className="content">
        <PageTop />
      </main>
    </div>
  );
}

export default Portfolio;
