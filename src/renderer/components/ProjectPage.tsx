import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/project.css';
import { projects } from '../data/projects';
import GitHubRepoCard from './GitHubRepoCard';

function ProjectPage() {
  const { id } = useParams();
  const projectId = Number(id);
  const s = projects.find((p) => p.id === projectId) || projects[0];
  if (!s) return <div>プロジェクト情報がありません。</div>;

  const hasDemo = !!(s.demo && s.demo.trim().length > 0);
  const toc = [
    { id: 'overview', label: '概要' },
    { id: 'belong', label: 'チーム開発' },
    { id: 'skill', label: '使用技術' },
    { id: 'features', label: '機能面' },
    { id: 'point', label: '開発のポイント' },
    ...(hasDemo ? [{ id: 'demo', label: 'デモ' }] : []),
    { id: 'links', label: '外部リンク' },
  ];

  const featureList = s.features;

  return (
    <div className="notion-page notion-page--toc-right">
      <aside className="notion-toc">
        <div className="notion-toc-title">目次</div>
        <ul>
          {toc.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`}>{t.label}</a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '12px' }}>
          <Link
            to="/projects"
            style={{ fontSize: '12px', textDecoration: 'none' }}
          >
            ← 一覧へ戻る
          </Link>
        </div>
      </aside>
      <main className="notion-content">
        <section id="overview" className="notion-section">
          <h2>概要</h2>
          <p>{s.overview}</p>
        </section>
        <section id="belong" className="notion-section">
          <h2>チーム開発</h2>
          <p>{s.belong}</p>
        </section>
        <section id="skill" className="notion-section">
          <h2>使用技術</h2>
          <ul className="notion-list">
            {s.skill.split(',').map((k) => (
              <li key={k.trim()}>{k.trim()}</li>
            ))}
          </ul>
        </section>
        <section id="features" className="notion-section">
          <h2>機能面</h2>
          <ul className="notion-list">
            {featureList.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
        <section id="point" className="notion-section">
          <h2>開発のポイント</h2>
          <p>{s.point}</p>
        </section>
        {hasDemo && (
          <section id="demo" className="notion-section">
            <h2>デモ / スクリーンショット</h2>
            <p>
              <a href={s.demo} target="_blank" rel="noreferrer">
                {s.demo}
              </a>
            </p>
          </section>
        )}
        <section id="links" className="notion-section">
          <h2>外部リンク</h2>
          {s.link.includes('github.com/') ? (
            <GitHubRepoCard repoUrl={s.link} />
          ) : (
            <p>
              <a href={s.link} target="_blank" rel="noreferrer">
                {s.link}
              </a>
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default ProjectPage;
