

interface Section {
  id: number;
  title: string;
  belong: string;
  skill: string;
  content: string;
  point: string;
  demo: string;
  link: string;
}

export const sections: Section[] = [
  {
    id: 1,
    title: "位置情報を利用して限定されたユーザー間で交流できるSNS。",
    belong: "フロントエンドを主に担当",
    skill: "TypeScript, React, shadcn/ui, Go, Firebase",
    content:
        "ユーザーはポスト、スレッド、イベントを作成し地図上の現在地にホップアップされる。",

    point: "UIデザイン担当が作業しやすいよう、読みやすいプログラムを意識したコーディング",
    demo: "https://work-create-qr.vercel.app/",
    link: "https://work-create-qr.vercel.app/"
  },
];
