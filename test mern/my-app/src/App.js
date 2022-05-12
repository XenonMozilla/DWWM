import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;