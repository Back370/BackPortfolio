import { useEffect } from 'react';

export const useScrollEffects = () => {
  useEffect(() => {
    // ページトップボタンの処理
    const pageTop = document.getElementById('js-page-top');

    const handleScroll = () => {
      if (pageTop) {
        if (window.scrollY > 100) {
          pageTop.style.display = 'block';
        } else {
          pageTop.style.display = 'none';
        }
      }
    };

    const handlePageTopClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // スムーススクロール
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const element = href ? document.querySelector(href) : null;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    pageTop?.addEventListener('click', handlePageTopClick);

    // すべてのアンカーリンクにイベントを追加
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      pageTop?.removeEventListener('click', handlePageTopClick);
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
};
