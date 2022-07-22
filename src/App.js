import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes, Link } from 'react-router-dom'
import Input from './components/Input';
import TimeZones from './components/TimeZones';
import Contact from './components/Contact';

function App() {

  return (

      <div className='App'>
        <nav className='navigation'>
        <Link className='nav-link' to="/">
          <h1 className='nav-text'>Weather</h1>
        </Link>
        <Link className='nav-link' to="/timezones">
          <h1 className='nav-text'>Time Zone</h1>
        </Link>
        <Link className='nav-link' to='/contact'>
          <h1 className='nav-text'>Contact</h1>
        </Link>
        </nav>
        <main>
        <Routes>
            <Route path='/' element={ <Input /> } />
            <Route path='/timezones' element={ <TimeZones /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
        </main>
      </div>

  );
}

export default App;
