import { Nav } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'
import Input from './Input';
import TimeZones from './TimeZones';
import Contact from './Contact';

function Navigation(){
    return (
        <div>
        <Nav className='navigation' justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
          <Nav.Link className='links' href='/' eventKey="link-1">Weather</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href='/timezones' eventKey="link-2">Time Zones</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href='contact' eventKey="link-3">Contact Developer</Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
            <Route path='/' element={ <Input /> } />
            <Route path='/timezones' element={ <TimeZones /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
        </div>
          );
}

export default Navigation