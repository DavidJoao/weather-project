import { Card } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'

function NextDay( { country, name, region, maxtemp, mintemp, icon, text, sunset, sunrise}) {
    return (
      <div className='weatherr'>
      <Badge className='badge' bg='dark'>Forecast for Tomorrow</Badge>
      <Card className='weather-card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Subtitle>{ country }</Card.Subtitle>
            <Card.Title>{ name }</Card.Title>
            <Card.Subtitle>{ region }</Card.Subtitle><br />
            <Card.Img className='icon' src={ icon }></Card.Img>
            <Card.Text>{ text }</Card.Text>
            <p className='foredetail'>Max expected: { maxtemp }</p>
            <p className='foredetail'>Min expected: { mintemp } </p>
            <p className='foredetail'>Sunrise: { sunrise } </p>
            <p className='foredetail'>Sunset: { sunset } </p>
            <span></span>
        </Card.Body>
      </Card>
      </div>
    );
  }

  export default NextDay