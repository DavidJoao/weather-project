import { Card } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'

function NextDay() {
    return (
      <div className='weatherr'>
      <Badge className='badge' bg='dark'>Forecast for Tomorrow</Badge>
      <Card className='weather-card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Subtitle>United States</Card.Subtitle>
            <Card.Title>Los Angeles</Card.Title>
            <Card.Subtitle>California</Card.Subtitle><br />
            <Card.Img className='icon' src='//cdn.weatherapi.com/weather/64x64/day/116.png'></Card.Img>
            <Card.Text>Partly cloudy</Card.Text>
            <span className='max'>85°F</span><br></br>
            <span>Feels Like: 84°F</span>
            <span></span>
        </Card.Body>
      </Card>
      </div>
    );
  }

  export default NextDay