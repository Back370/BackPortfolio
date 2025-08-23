

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
    title: "入力した情報を基にQRコードを生成し、SNSのアカウントやWIFI情報等の雑多な情報の共有を簡易に行えるアプリ。",
    belong: "UIデザインを除く全ての開発工程を担当",
    skill: "Python, Flask",
    content: "QRコードの生成、生成したQRコードの保存（ブラウザストレージ保存）、保存されたQRの削除、指定したQRのポップアップ表示",
    point: "UIデザイン担当が作業しやすいよう、読みやすいプログラムを意識したコーディング",
    demo: "https://work-create-qr.vercel.app/",
    link: "https://work-create-qr.vercel.app/"
  },
];
