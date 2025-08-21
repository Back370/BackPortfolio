import React from 'react';
import { useScrollEffects } from '../hooks/useScrollEffects';
import Works from './Works';
import PageTop from './PageTop';

function Portfolio() {
  useScrollEffects();

  return (
    <div className="wrapper">
      <main className="content">
        <Works />
        <PageTop />
      </main>
    </div>
  );
}

export default Portfolio;
