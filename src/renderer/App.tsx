import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import icon from '../../assets/icon.svg';
import './css/ress.css';
import './css/style.css';

function Portfolio() {
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

  return (
    <div className="wrapper">
      <main className="content">
        {/* header */}
        <header className="header">
          <div className="header-inner">
            <p className="header-title">Hanako Yamada</p>
            <p className="header-subtitle">Portfolio</p>
          </div>
        </header>
        {/* /header */}

        {/* gnav */}
        <nav className="gnav">
          <div className="gnav-inner">
            <ul className="gnav-list">
              <li className="gnav-item">
                <a href="#works">works</a>
              </li>
              <li className="gnav-item">
                <a href="#skill">skill</a>
              </li>
              <li className="gnav-item">
                <a href="#about">about</a>
              </li>
              <li className="gnav-item">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* /gnav */}

        {/* works */}
        <section className="works section" id="works">
          <div className="inner">
            <h2 className="title">works</h2>
            <div className="works-list">
              <a className="works-item" href="works-template.html">
                <p className="works-img">
                  <img src={icon} alt="" />
                </p>
                <p className="works-name">作品名が入る</p>
                <p className="works-info">Design / Coding(Responsive)</p>
              </a>
              <a className="works-item" href="works-template.html">
                <p className="works-img">
                  <img src={icon} alt="" />
                </p>
                <p className="works-name">作品名が入る</p>
                <p className="works-info">
                  Design / Coding(Responsive) / WordPress
                </p>
              </a>
              <a className="works-item" href="works-template.html">
                <p className="works-img">
                  <img src={icon} alt="" />
                </p>
                <p className="works-name">作品名が入る</p>
                <p className="works-info">Design</p>
              </a>
              <a className="works-item" href="works-template.html">
                <p className="works-img">
                  <img src={icon} alt="" />
                </p>
                <p className="works-name">作品名が入る</p>
                <p className="works-info">Banner Design</p>
              </a>
              <a className="works-item" href="works-template.html">
                <p className="works-img">
                  <img src={icon} alt="" />
                </p>
                <p className="works-name">作品名が入る</p>
                <p className="works-info">Banner Design</p>
              </a>
            </div>
          </div>
        </section>
        {/* /works */}

        {/* skill */}
        <section className="skill section" id="skill">
          <div className="inner">
            <h2 className="title">skill</h2>
            <div className="skill-list">
              <div className="skill-item">
                <p className="skill-img">
                  <img src={icon} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">HTML5/CSS3</h3>
                  <p className="skill-text">
                    テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={icon} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">WordPress</h3>
                  <p className="skill-text">
                    テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={icon} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">JavaScript</h3>
                  <p className="skill-text">
                    テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={icon} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">Photoshop</h3>
                  <p className="skill-text">
                    テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={icon} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">Illustrator</h3>
                  <p className="skill-text">
                    テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={icon} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">XD</h3>
                  <p className="skill-text">
                    テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /skill */}

        {/* about */}
        <section className="about section" id="about">
          <div className="inner">
            <h2 className="title">about</h2>
            <div className="profile">
              <p className="profile-img">
                <img src={icon} alt="" />
              </p>
              <div className="profile-body">
                <p>
                  テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                </p>
                <p>
                  テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* /about */}

        {/* contact */}
        <section className="contact section" id="contact">
          <div className="inner">
            <h2 className="title">Contact</h2>
            <div className="contact-list">
              <a
                className="contact-item"
                href="https://x.com/back370"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                className="contact-item"
                href="https://github.com/Back370"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </section>
        {/* /contact */}

        <div className="page-top" id="js-page-top">
          <span className="material-icons-outlined">expand_less</span>
        </div>
      </main>

      {/* footer */}
      <footer className="footer">
        <div className="copyright">&copy;Hanako Yamada</div>
      </footer>
      {/* /footer */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
