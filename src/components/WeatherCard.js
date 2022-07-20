import { Card } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import Input from './Input';
import { useState } from 'react'

function WeatherCard( { country, name, region, icon, text, tempf, feelslike} ) {

  const [city, setCity ] = useState('') 

    return (
      <div className='weatherr'>
      <Badge className='badge' bg='dark'>Current Weather</Badge>
      <Card className='weather-card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Subtitle>{country}</Card.Subtitle>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{region}</Card.Subtitle><br />
            <Card.Img className='icon' src={icon}></Card.Img>
            <Card.Text>{text}</Card.Text>  {/* [0].condition.text or icon */}
            <span className='max'>{tempf}°F</span><br></br>
            <span>Feels like: {feelslike}°F</span>
            <span></span>
        </Card.Body>
      </Card>
      </div>
    );
  }

  export default WeatherCard