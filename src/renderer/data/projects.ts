import iWidgetkawaii from '../img/widgetkawaii.png';
import iPomodoro from '../img/pomodoro.png';
import iChap from '../img/chap.jpg';
import iCoyote from '../img/coyote.jpg';
import iOekaki from '../img/oekaki.jpg';
import iOminousRoom from '../img/ominousroom.png';

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
    name: 'OminousRoom 不吉な部屋',
    overview:
      '奇妙な構造、黄色い壁と湿っぽいカーペットBackroomsの世界に迷い込んだプレイヤーが脱出を目指すゲーム。\n 先駆者が残したアイテムをうまく使い、エンティティやギミックを切り抜けろ。生き残るのは一人だけだ',
    belong: '個人開発',
    skill: 'UnrealEngine, SteamOnlineServices',
    features: [
      '・マルチプレイ機能',
      '・インベントリ機能',
      '・キャラクター切り替え機能',
      '・ランダム生成される構造物',
      '・複数のエンティティとギミック',
    ],
    point: 'マルチプレイゲームを作るときは覚悟が必要だよ',
    demo: '',
    link: '',
    date: '2025-10-30',
    info: '個人開発',
    img: iOminousRoom,
  },
  {
    id: 2,
    name: 'PomodoroShareApp~人と作業し集中力とモチベを上げるタイマーアプリ~',
    overview:
      'リアルタイムで他ユーザーと学習状況を共有するポモドーロシェアアプリ',
    belong: 'フロントエンドと一部バックエンドを担当',
    skill: '認証:Firebase Authentication \n バックエンド:Firebase DB, Supabase Storage, \n フロントエンド:Kotlin, Coil, Vico,Figma',
    features: [
      'ユーザーは、新たに部屋を作成するかすでに作成されている部屋に参加します。\n それぞれの部屋には開始時刻とセッション数が設定されており、開始時刻になると25分間の作業時間が開始され、それが終わったら5分間の休憩時間があります。\n この25分間の作業時間と5分間の休憩時間のサイクルをセッション数の分だけ繰り返します。\n 部屋内では　チャット機能もあり、他のユーザーと意気込みや進捗を共有したり、コミュニケーションをとったりしながら作業を進めることができます。',
      '・部屋の作成と',
      '・プロフィール画像の表示と編集機能',
      '・その日の勉強時間のリマインド',
      '・ログイン機能',
      '・勉強時間が増えるとフレームが豪華になっていく',
    ],
    point: '部屋を抜けるとその部屋が上部に固定されたり、部屋の非表示機能とID検索機能があったりと、ユーザーが使いやすいように細かいところまで工夫した',
    demo: 'https://www.canva.com/design/DAGzgTdHsqw/zjFuOpPvQVUcYojLOrOMhw/view?utm_content=DAGzgTdHsqw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1dac7ba793',
    link: 'https://github.com/suzukibelltree/PomodoroShareApp/tree/develop',
    date: '2025-10-01',
    info: 'frontend, backend',
    img: iPomodoro,
  },
  {
    id: 3,
    name: 'CHAP',
    overview:
      '位置情報を利用して限定されたユーザー間で交流できるSNS',
    belong: 'フロントエンドを主に担当',
    skill: 'TypeScript, React, shadcn/ui, Go, AWS',
    features: [
      '・ユーザーはポスト、スレッド、イベントを作成し地図上の現在地にホップアップされる',
      '・イベントは地図上をホバーすることができる',
      '・スレッド内容に対してほかのユーザーはコメントを追加することができる',
      '・ログイン機能',
      '・「地域住民コミュニケーション」「災害情報」の属性を投稿に付与できる',
    ],
    point: 'Mapboxを使ったリッチな地図表示と今後の拡張性のためホップアップを自作',
    demo: 'https://www.chap-app.jp/',
    link: 'https://github.com/uzak0209/CHAP',
    date: '2025-08-22',
    info: 'frontend',
    img: iChap,
  },
  {
    id:4,
    name: 'Kawaii Widget',
    overview:
      'WidgetKawaiiはスマートフォンのウィジェットに動きあるキャラクターを追加し日常的な癒しを提供するアプリ',
    belong: 'フルスタック (UI一部協力)',
    skill: 'Kotlin, Jetpack Compose, Firebase Storage, Python',
    features: ['キャラクター切り替え可能', 'アニメーション速度、画質切り替え可能', 'キャラクターからの通知'],
    point: 'バックグラウンドでのアニメーション制御と省電力化、自動アプリ停止防止',
    demo: 'https://www.canva.com/design/DAGs-DqhMtI/JjmHvoNlrFtAuSOW5cuZpQ/edit?utm_content=DAGs-DqhMtI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    link: 'https://github.com/Back370/WidgetKawaii（現在private）',
    date: '2025-08-22',
    info: 'frontend, backend',
    img: iWidgetkawaii,
  },
  {
    id: 5,
    name: 'コヨーテAI',
    overview: 'DeepCFRの考え方を取り入れたDQN学習+ルールベースのハイブリッドAI。',
    belong: '個人開発',
    skill: 'Python',
    features: ['初めてのDQN 学習', '例外はルールベースで補完', 'かなり急いで作ったので多分クソコード'],
    point: 'DQNやDeepCFRについて記事で調べたり、強化学習について本で勉強したりした',
    demo: '',
    link: 'https://github.com/Back370/MycoyoteAI',
    date: '2025-08-22',
    info: '個人開発',
    img: iCoyote,
  },
  {
    id: 6,
    name: 'その場でおえかきカードゲーム',
    overview: '描いた絵が即座にカード化され対戦に使用できるゲーム。',
    belong: 'バックエンド担当',
    skill: 'JavaScript, WebSocket',
    features: ['NativeWebSocketを使用して自分たちで通信を確立', '絵の色からハッシュ値を生成しカードのパラメータに変換', 'ロビー/部屋管理'],
    point: '個人的にWebSocketが好きになった',
    demo: '',
    link: 'https://github.com/nqmery/OekakiDuel-Server',
    date: '2025-08-22',
    info: 'backend',
    img: iOekaki,
  },
];
