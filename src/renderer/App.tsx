import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import './css/ress.css';
import './css/style.css';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
