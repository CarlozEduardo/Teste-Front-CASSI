import Questionario from './pages/QuestionarioNip/QuestionarioNip';
import Contato from './pages/Contato/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contato />} />
        <Route path="/questionario" element={<Questionario />} />
      </Routes>
    </Router>
  );
}

export default App;