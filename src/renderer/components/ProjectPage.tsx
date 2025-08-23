import React from 'react';
import '../css/project.css';
import { projects } from '../data/project';

const sections: Section[] = [
  {
    id: 'overview',
    title: '概要',
    body: (
      <p>
        入力した情報を基にQRコードを生成し、SNSのアカウントやWIFI情報等の雑多な情報の共有を簡易に行えるアプリ。
      </p>
    ),
  },
  {
    id: 'team',
    title: 'チーム開発',
    body: <p>UIデザインを除く全ての開発工程を担当。</p>,
  },
  {
    id: 'stack',
    title: '使用技術',
    body: (
      <ul className="notion-list">
        <li>
          <strong>Python (Flask)</strong>:
          チームメンバーの技術スタックに合わせ、簡易に開発できる Python を使用。
        </li>
      </ul>
    ),
  },
  {
    id: 'features',
    title: '機能面',
    body: (
      <ul className="notion-list">
        <li>QRコードの生成</li>
        <li>生成したQRコードの保存（ブラウザストレージ保存）</li>
        <li>保存されたQRの削除</li>
        <li>指定したQRのポップアップ表示</li>
      </ul>
    ),
  },
  {
    id: 'devpoints',
    title: '開発のポイント',
    body: (
      <ul className="notion-list">
        <li>
          UIデザイン担当が作業しやすいよう、読みやすいプログラムを意識したコーディング
        </li>
      </ul>
    ),
  },
  {
    id: 'demo',
    title: 'デモ / スクリーンショット',
    body: (
      <p>
        デプロイ先:{' '}
        <a
          href="https://work-create-qr.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://work-create-qr.vercel.app/
        </a>
      </p>
    ),
  },
  {
    id: 'links',
    title: '外部リンク',
    body: <p>(準備中)</p>,
  },
];

function ProjectPage() {
  return (
    <div className="notion-page notion-page--toc-right">
      <aside className="notion-toc">
        <div className="notion-toc-title">目次</div>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="notion-content">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="notion-section">
            <h2>{s.title}</h2>
            {s.body}
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProjectPage;
