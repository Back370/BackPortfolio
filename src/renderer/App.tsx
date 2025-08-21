import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import './css/ress.css';
import './css/style.css';
import TopBar from './components/TopBar';
import IconCard from './components/IconCard';
import Profile from './components/Profile';
import './css/intro.css';

export default function App() {
  return (
    <Router>
      <TopBar />
      <div className="intro-row">
        <IconCard />
        <Profile />
      </div>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
