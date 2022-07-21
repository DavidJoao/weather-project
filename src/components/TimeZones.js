import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import TimeZoneCard from './TimeZoneCard'



function TimeZones(){

    let [ time, setTime ] = useState('Los Angeles')

    const MY_KEY = process.env.REACT_APP_WEATHER_API_KEY;     

    const handleChange = (e) => {
        time = e.target.value;
    }

    const handleSearch = () => {


        //STARTING FETCH FOR TIME ZONES
        
        fetch(`https://api.weatherapi.com/v1/timezone.json?key=${MY_KEY}&q=${time}`)
        .then((res) => { return res.json()})
        .then((data) => {
            time = data;
            console.log(time)

            time = {
                name: data.location.name,
                region: data.location.region,
                country: data.location.country,
                localtime: data.location.localtime,
            }

            console.log(time);
            setTime(time);

        })
        .catch((err) => { console.log(err) })
    }


    return(
        <div >
        <InputGroup className='mb-3'>
            <InputGroup.Text id='inputGroup-sizing-default'> Enter a city </InputGroup.Text>
            <Form.Control
            placeholder='Ex. Los Angeles'
            onChange={handleChange}
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default' />
            <Button onClick={handleSearch} variant="dark"> Search </Button>
        </InputGroup> 
            <TimeZoneCard name={time.name} region={time.region} country={time.region} localtime={time.localtime} />
        <br />
        </div>
    )
}

export default TimeZones