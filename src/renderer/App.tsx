import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import './css/ress.css';
import './css/style.css';
import TopBar from './components/TopBar';
import IconCard from './components/IconCard';

export default function App() {
  return (
    <Router>
      <TopBar />
      <IconCard />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
