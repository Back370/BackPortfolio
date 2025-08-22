import React from 'react';

type Props = {
  start: string;
  end: string;
  title: string;
  content: string;
  index: number;
};

/* Localized timeline entry (no Tailwind). Parent (.career-timeline) positions line & dot */
function Career({ start, end, title, content, index }: Props) {
  const isLeft = index % 2 === 0;
  return (
    <div
      className={`career-entry ${
        isLeft ? 'career-entry--left' : 'career-entry--right'
      }`}
    >
      <div className="career-entry__side career-entry__side--left">
        {isLeft && (
          <div className="career-card">
            <p className="career-period">
              {start} ~ {end}
            </p>
            <h3>{title}</h3>
            {content.split('\n').map((l) => (
              <p key={`${title}-${l.substring(0, 18)}-${l.length}`}>{l}</p>
            ))}
          </div>
        )}
      </div>
      <div className="career-entry__dot" aria-hidden="true" />
      <div className="career-entry__side career-entry__side--right">
        {!isLeft && (
          <div className="career-card">
            <p className="career-period">
              {start} ~ {end}
            </p>
            <h3>{title}</h3>
            {content.split('\n').map((l) => (
              <p key={`${title}-${l.substring(0, 18)}-${l.length}`}>{l}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Career;
