import '../css/topbar.css';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default TopBar;
