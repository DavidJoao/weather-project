import { Form }  from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import WeatherCard from './WeatherCard'
import NextDay from './NextDay'
import CoverPhoto from './CoverPhoto'


function Input(){

    let [ city, setCity ] = useState('Los Angeles')
    let [ cityForecast, setCityForecast] = useState('Los Angeles')

    const MY_KEY = process.env.REACT_APP_WEATHER_API_KEY;       

    let cityName = '';


    // FUNCTION TO DETECT CHANGE IN INPUT BOX
     
    const handleChange = (e) => {

        city = e.target.value;

    }
    

    //FUNCTION TO HANDLE SEARCH BUTTON, WILL FETCH THE INFORMATION THAT I NEED

    const handleSubmit = () => {
        


        // FETCH FOR GET CURRENT WEATHER 

        fetch(`https://api.weatherapi.com/v1/current.json?key=${MY_KEY}&q=${city}`)
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

        // STARTING NEW FETCH FOR FORECAST
        
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${MY_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
        .then((res) => { return res.json()} )
        .then((data) => {

            cityForecast = data;

            console.log(data)

            cityForecast = {

                maxtemp: data.forecast.forecastday[0].day.maxtemp_f,
                mintemp: data.forecast.forecastday[0].day.mintemp_f,
                icon: data.forecast.forecastday[0].day.condition.icon,
                text: data.forecast.forecastday[0].day.condition.text,
                sunset: data.forecast.forecastday[0].astro.sunset,
                sunrise: data.forecast.forecastday[0].astro.sunrise,

            }
            
            console.log(cityForecast)
            setCityForecast(cityForecast)

        })
        .catch((err) => { console.log(err) })

    }
    


    return(
        <div >
        <CoverPhoto />
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
            <NextDay country={city.country} name={city.name} region={city.region} maxtemp={cityForecast.maxtemp} mintemp={cityForecast.mintemp} icon={cityForecast.icon} text={cityForecast.text} sunrise={cityForecast.sunrise} sunset={cityForecast.sunset} />
        </div>
        <br />
        </div>
    )
}

export default Input;