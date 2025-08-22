import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './css/ress.css';
import './css/style.css';
import TopBar from './components/TopBar';
import IconCard from './components/IconCard';
import Profile from './components/Profile';
import './css/intro.css';
import ProjectsTimeline from './components/ProjectsTimeline';
import './css/routefade.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="intro-row">
      <IconCard />
      <div className="route-container flex-fill">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/projects"
            element={
              <div className="fade-in route-pane">
                <ProjectsTimeline />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="fade-in route-pane">
                <Profile />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="fade-in route-pane">
                <Profile />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <TopBar />
      <AnimatedRoutes />
    </Router>
  );
}
