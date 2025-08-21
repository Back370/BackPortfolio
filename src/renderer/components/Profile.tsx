import React from 'react';
import '../css/profile.css';

// go-skill-icons を使うユーティリティ
const skillIcon = (name: string, alt?: string) => (
  <img
    key={`${name}-${alt || name}`}
    className={`skill-icon skill-${name}`}
    src={`https://go-skill-icons.vercel.app/api/icons?i=${name}&theme=dark`}
    alt={alt || name}
    width={48}
    height={48}
    loading="lazy"
    decoding="async"
    style={{ color: 'transparent' }}
  />
);

function Profile() {
  return (
    <section className="profile">
      <div className="belong-skills-section">
        <h2 className="section-title">Belong</h2>
        <div className="belong-text">
          名古屋工業大学 工学部 情報工学科
          <br />
          C0de
          <br />
          jack
          <br />
          NxTEND
          <br />
          TAIR
        </div>

        <br />
        <br />
        <h2 className="section-title">Skills</h2>
        <div className="skill-group">
          <h3 className="group-title">MAIN</h3>
          <div className="icon-row">
            {skillIcon('unrealengine', 'Unreal Engine')}
            {skillIcon('python')}
            {skillIcon('kotlin')}
            {skillIcon('react')}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="group-title">Other</h3>
          <div className="icon-row">
            {skillIcon('blender')}
            {skillIcon('docker')}
            {skillIcon('figma')}
            {skillIcon('css')}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="group-title">SUB</h3>
          <div className="icon-row">
            {skillIcon('java')}
            {skillIcon('typescript')}
            {skillIcon('javascript')}
            {skillIcon('html')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
