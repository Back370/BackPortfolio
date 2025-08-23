import React from 'react';
import '../css/github-card.css';

interface GitHubRepoCardProps {
  repoUrl: string; // https://github.com/owner/repo
  // 任意説明 (APIなし静的) - defaultProps でデフォルト付与
  placeholderDesc?: string;
}

function parse(url: string): { owner: string; repo: string } | null {
  try {
    const u = new URL(url);
    if (!/github\.com$/i.test(u.hostname)) return null;
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1] };
  } catch {
    return null;
  }
}

// オーナー/リポジトリ名から決定的にアクセントカラー(HSL)を生成
function accentColor(owner: string, repo: string): string {
  const str = `${owner}/${repo}`;
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = Math.imul(hash, 31) + str.charCodeAt(i);
  }
  const unsigned = Math.abs(hash);
  const h = unsigned % 360; // 0-359
  const s = 65; // 固定彩度
  const l = 55; // 固定輝度
  return `hsl(${h}deg ${s}% ${l}%)`;
}

export default function GitHubRepoCard({
  repoUrl,
  placeholderDesc,
}: GitHubRepoCardProps) {
  const parsed = parse(repoUrl);
  if (!parsed) {
    return (
      <a className="gh-card" href={repoUrl} target="_blank" rel="noreferrer">
        {repoUrl}
      </a>
    );
  }
  const { owner, repo } = parsed;
  const color = accentColor(owner, repo);
  return (
    <a
      className="gh-card"
      href={repoUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`GitHub repository ${owner}/${repo}`}
      style={{ ['--gh-accent' as any]: color }}
    >
      <div className="gh-card-header">
        <span
          className="gh-color-dot"
          aria-hidden
          style={{ background: color }}
        />
        <span className="gh-card-title">
          <strong>{owner}</strong> / {repo}
        </span>
        <span className="gh-card-icon" aria-hidden>
          🐙
        </span>
      </div>
      <div className="gh-card-desc">{placeholderDesc}</div>
      <div className="gh-card-meta">
        <span className="gh-badge" aria-hidden>
          <svg
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            aria-label="repo"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5v11a.5.5 0 0 1-.777.416L8 10.101l-5.223 3.815A.5.5 0 0 1 2 13.5z" />
          </svg>
          repo
        </span>
        <span>GitHub</span>
      </div>
    </a>
  );
}

// eslint-disable-next-line react/static-property-placement
GitHubRepoCard.defaultProps = {
  placeholderDesc: 'GitHub リポジトリ',
};
