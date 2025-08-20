import React from 'react';
import icon from '../../../assets/icon.svg';

function About() {
  return (
    <section className="about section" id="about">
      <div className="inner">
        <h2 className="title">about</h2>
        <div className="profile">
          <p className="profile-img">
            <img src={icon} alt="" />
          </p>
          <div className="profile-body">
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
            </p>
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
