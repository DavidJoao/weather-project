import { Nav } from 'react-bootstrap'

function Navigation(){
    return (
        <Nav className='navigation' justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className='links' href="/home">Weather</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href='/timezones' eventKey="link-1">Time Zones</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href='contact' eventKey="link-2">Contact Developer</Nav.Link>
          </Nav.Item>
        </Nav>
      );
}

export default Navigation