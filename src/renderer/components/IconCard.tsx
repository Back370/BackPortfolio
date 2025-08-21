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
          <i className="bi bi-twitter-x" aria-label="X" />
          <i className="bi bi-github" aria-label="github" />
          <i className="bi bi-journal-text" aria-label="zenn" />
        </div>
        <div className="text-wrapper">Back</div>
      </div>
    </section>
  );
}
export default IconCard;
