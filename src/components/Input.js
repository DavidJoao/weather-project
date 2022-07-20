import {Form} from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import WeatherCard from './WeatherCard'
import NextDay from './NextDay'

function Input(){

    let [ city, setCity ] = useState('Los Angeles')

    const myKey = 'd707853305204cf699a210307221407'        

    let cityName = '';
    const handleChange = (e) => {

        city = e.target.value;

    }
    
    const handleSubmit = () => {
        
        fetch(' https://api.weatherapi.com/v1/current.json?key=' + myKey +'&q=' + city)
        .then((res) => { return res.json()})
        .then((data) => {
            city = data;
            
            console.log(city)

            city = {
                country: data.location.country,
                name: data.location.name,
                region: data.location.region,
                icon: data.current.condition.icon,
                text: data.current.condition.text,
                tempf: data.current.temp_f,
                feelslike: data.current.feelslike_f,
            }

            console.log(city)
            
            setCity(city)
        })
        .catch((err ) => console.log(err))

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
            <Button onClick={handleSubmit} variant="dark"> Search </Button>
        </InputGroup> 
        <div className='blocks'>
            <WeatherCard country={city.country} name={city.name} region={city.region } icon={city.icon} text={city.text} tempf={city.tempf} feelslike={city.feelslike}/> 
            <NextDay />
        </div>
        <br />
        </div>
    )
}

export default Input;