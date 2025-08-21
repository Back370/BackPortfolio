import '../css/topbar.css';

function TopBar() {
  return (
    <nav className="topbar">
      <div className="topbar-inner">
        <ul className="nav-left">
          <li>
            <span>Back</span>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <a href="./index.html">Profile</a>
          </li>
          <li>
            <a href="./projects.html">Projects</a>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default TopBar;
