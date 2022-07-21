import { Card } from 'react-bootstrap' 

function Contact(){
    return(
        <Card className='contact-card' border="secondary" style={{ width: '18rem' }}>
            <Card.Header>Contact Me!</Card.Header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Card.Body>
                <a href="https://www.linkedin.com/in/davidjoaosandoval/" target='_blank' className="fa fa-linkedin"></a>
                <a href='https://github.com/DavidJoao' target='_blank' className="fa fa-github"> </a>
            </Card.Body>
      </Card>
    )
}

export default Contact