import { Card } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'

function TimeZoneCard( {name, region, country, localtime }){


    return(
    <div className='timezonecard'>
        <Badge className='badge' bg='dark'>Time Zone</Badge>
        <Card className='time-card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body className='time-body'>
              <Card.Subtitle>{country}</Card.Subtitle>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>{region}</Card.Subtitle><br />
              <Card.Text>Time: </Card.Text>
              <Card.Text className='localtime-text'>{localtime}</Card.Text>
          </Card.Body>
        </Card>
    </div>
    )
}

export default TimeZoneCard