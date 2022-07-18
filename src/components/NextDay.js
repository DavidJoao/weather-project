import { defaultMaxListeners } from 'prompt';
import { Card } from 'react-bootstrap'

function NextDay() {
    return (
      <Card className='weather-card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Subtitle>United States</Card.Subtitle>
            <Card.Title>Los Angeles</Card.Title>
            <Card.Subtitle>California</Card.Subtitle><br />
            <Card.Img className='icon' src='//cdn.weatherapi.com/weather/64x64/day/116.png'></Card.Img>
            <Card.Text>Partly cloudy</Card.Text>  {/* [0].condition.text or icon */}
            <span className='max'>85°F</span><br></br>
            <span>Feels Like: 84°F</span>
            <span></span>
        </Card.Body>
      </Card>
    );
  }

  export default NextDay