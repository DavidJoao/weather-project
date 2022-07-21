import { Card } from 'react-bootstrap'

function CoverPhoto() {
    return(
        <div className='cover-card'>
            <Card className='card-content'>
                <Card.Header as="h5">MyWeather Website</Card.Header>
                <Card.Body>
                    <Card.Title>How does this page work?</Card.Title>
                    <Card.Text>
                    With this simple interface, the user gets weather information about the city they input, on the left card the user will be informed about
                    the current weather of that city, the card located in the right side will provide a forecast for the next day.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CoverPhoto