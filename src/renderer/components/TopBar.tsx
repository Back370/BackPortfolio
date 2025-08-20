import '../css/topbar.css';

function TopBar() {
  return (
    <nav className="topbar">
      <ul>
        <li className="left-side">
          <a href="./index.html">Back</a>
        </li>
        <div className="right-side">
          <li>
            <a href="./index.html">Profile</a>
          </li>
          <li>
            <a href="./projects.html">Projects</a>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default TopBar;
