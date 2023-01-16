import React, { useState } from "react";
import Form from "./Form";
import Card from './Card';

const WeatherPanel = () => {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=8caf265f8110d522271bbd2aed4ac7a0&lang=es";
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=8caf265f8110d522271bbd2aed4ac7a0&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation =  (loc) => {
    setLoading(true);
    setLocation(loc);

    urlWeather = urlWeather + cityUrl + loc;

    fetch(urlWeather)
      .then((response) => {
        if (!response.ok) {
          throw { response };
        }
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
        console.log(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    urlForecast = urlForecast + cityUrl + loc;

    fetch(urlForecast)
      .then((response) => {
        if (!response.ok) {
          throw { response };
        }
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);
        console.log(forecastData);
        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <>
      <Form newLocation={getLocation} />

      <Card 
        showData ={show}
        loadingData ={loading}
        weather ={weather}
        forecast ={forecast}
      />
    </>
  );
};

export default WeatherPanel;
