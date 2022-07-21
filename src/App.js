import './App.css';
import Home from './components/home';
import Register from './components/register';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/update' element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
