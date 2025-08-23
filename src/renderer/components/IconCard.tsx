import '../css/iconcard.css';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function IconCard() {
  return (
    <section className="profile-card-outer">
      <div className="profile-card">
        <div className="overlap-group">
          <img
            className="ellipse"
            alt="Ellipse"
            src="https://c.animaapp.com/KjUa5vVe/img/ellipse-5.png"
          />
        </div>
        <div className="social-icons">
          <a
            aria-label="X"
            href="https://x.com/back370"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter-x" aria-hidden="true" />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/Back370"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github" aria-hidden="true" />
          </a>
          <a
            aria-label="Zenn"
            href="https://zenn.dev/back77"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-journal-text" aria-hidden="true" />
          </a>
        </div>
        <div className="text-wrapper">Back</div>
      </div>
    </section>
  );
}
export default IconCard;
