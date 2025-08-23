/* eslint-disable linebreak-style */
import React from 'react';
import '../css/github-card.css';

interface GitHubRepoCardProps { repoUrl: string }

function GitHubRepoCard({ repoUrl }: GitHubRepoCardProps) {
  const m = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!m) {
    return (
      <a className="gh-card" href={repoUrl} target="_blank" rel="noreferrer">
        {repoUrl}
      </a>
    );
  }
  const [, owner, repo] = m;
  return (
    <a className="gh-card" href={repoUrl} target="_blank" rel="noreferrer">
      <div className="gh-card-header">
        <span className="gh-card-title"><strong>{owner}</strong> / {repo}</span>
        <span className="gh-card-icon" aria-hidden>🐙</span>
      </div>
      <div className="gh-card-desc">GitHub リポジトリへのリンクです。</div>
      <div className="gh-card-meta"><span>GitHub</span></div>
    </a>
  );
}

export default GitHubRepoCard;
