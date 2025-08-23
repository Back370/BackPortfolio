import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import './css/ress.css';
import './css/style.css';
import TopBar from './components/TopBar';
import IconCard from './components/IconCard';
import Profile from './components/Profile';
import './css/intro.css';
import ProjectsTimeline from './components/ProjectsTimeline';
import './css/routefade.css';
import Footer from './components/Footer';
import CareerPage from './components/CareerPage';
import ProjectPage from './components/ProjectPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="intro-row">
      <IconCard />
      <div className="route-container flex-fill">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/projects" replace />} />
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
            path="/career"
            element={
              <div className="fade-in route-pane">
                <ProjectPage />
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
      <div className="app-root">
        <TopBar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}
