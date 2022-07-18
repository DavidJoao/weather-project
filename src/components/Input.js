import {Form} from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

function Input( {city, setCity} ){
    const myKey = 'd707853305204cf699a210307221407'        

    let cityName = '';
    const handleChange = (e) => {

        cityName = e.target.value;

    }
    
    const handleSubmit = () => {
        
        fetch(' https://api.weatherapi.com/v1/current.json?key=' + myKey +'&q=' + cityName)
        .then((res) => { return res.json()})
        .then((data) => {
            city = data.location;
            console.log(city)
            
        })
        .catch((err ) => console.log(err))

    }
    


    return(
        <>
        <InputGroup className='mb-3'>
            <InputGroup.Text id='inputGroup-sizing-default'> Enter a city </InputGroup.Text>
            <Form.Control
            placeholder='Ex. Los Angeles'
            onChange={handleChange}
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default' />
            <Button onClick={handleSubmit} variant="dark"> Search </Button>
        </InputGroup> 
        <br />
        </>
    )
}

export default Input;