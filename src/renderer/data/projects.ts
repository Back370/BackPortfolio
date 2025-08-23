import iWidgetkawaii from '../img/widgetkawaii.png';
import iChap from '../img/chap.jpg';
import iCoyote from '../img/coyote.jpg';
import iOekaki from '../img/oekaki.jpg';

export interface Project {
  id: number;
  name: string;
  overview: string; // short description / title equivalent
  belong: string; // team / role
  skill: string; // comma separated stack
  features: string[]; // list of features
  point: string; // development point
  demo: string;
  link: string; // external link (could duplicate demo)
  date: string;
  info: string; // tags summary from timeline
  img: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'CHAP',
    overview:
      '位置情報を利用して限定されたユーザー間で交流できるSNS',
    belong: 'フロントエンドを主に担当',
    skill: 'TypeScript, React, shadcn/ui, Go, Firebase',
    features: [
      '・ユーザーはポスト、スレッド、イベントを作成し地図上の現在地にホップアップされる',
      '・イベントは地図上をホバーすることができる',
      '・スレッド内容に対してほかのユーザーはコメントを追加することができる',
      '・ログイン機能',
      '・「地域住民コミュニケーション」「災害情報」の属性を投稿に付与できる',
    ],
    point: 'Mapboxを使ったリッチな地図表示と今後の拡張性のためホップアップを自作',
    demo: 'https://example.com/chap-demo',
    link: 'https://github.com/uzak0209/CHAP',
    date: '2025-08-22',
    info: 'frontend',
    img: iChap,
  },
  {
    id: 2,
    name: 'Kawaii Widget',
    overview:
      'WidgetKawaiiはスマートフォンのウィジェットに動きあるキャラクターを追加し日常的な癒しを提供するアプリ',
    belong: 'フルスタック (UI一部協力)',
    skill: 'Kotlin, Jetpack Compose, Firebase Storage, Python',
    features: ['キャラクターアニメーション', 'テーマ切替', '設定永続化'],
    point: '再利用可能なレンダリングループと描画抽象化',
    demo: 'https://example.com/widget-demo',
    link: 'https://example.com/widget',
    date: '2025-08-22',
    info: 'frontend, backend',
    img: iWidgetkawaii,
  },
  {
    id: 3,
    name: 'コヨーテAI',
    overview: 'DeepCFRの考え方を取り入れたDQN学習+ルールベースのハイブリッドAI。',
    belong: '個人開発',
    skill: 'Python, PyTorch',
    features: ['DQN 学習', 'ルールベース補完', '自己対戦シミュレーション'],
    point: '探索と安定性の両立を意識した報酬設計',
    demo: 'https://example.com/coyote-demo',
    link: 'https://example.com/coyote',
    date: '2025-08-22',
    info: '個人開発',
    img: iCoyote,
  },
  {
    id: 4,
    name: 'その場でおえかきカードゲーム',
    overview: '描いた絵が即座にカード化され対戦に使用できるゲーム。',
    belong: 'バックエンド担当',
    skill: 'TypeScript, Node.js, WebSocket',
    features: ['リアルタイム同期', '画像→カード化処理', 'ロビー/部屋管理'],
    point: '低レイテンシなイベント分配と軽量プロトコル',
    demo: 'https://example.com/oekaki-demo',
    link: 'https://example.com/oekaki',
    date: '2025-08-22',
    info: 'backend',
    img: iOekaki,
  },
];
