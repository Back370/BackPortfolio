import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Back Portfolio by electron & react
        </p>
      </div>
    </footer>
  );
}
export default Footer;
