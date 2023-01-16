import React from "react";
import Spinner from "./Spinner";
import ForecastItem from "./ForecastItem";
import { TbTemperatureMinus , TbTemperaturePlus , TbTemperature , TbDroplet , TbWind , TbCalendarTime } from "react-icons/tb";

const Card = ({ loadingData, showData, weather, forecast }) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + "/" + month + "/" + year;

  let url = "";
  let iconUrl = "";

  let iconUrl3 = "";
  let iconUrl6 = "";
  let iconUrl9 = "";

  let forecastDate3 = "";
  let forecastDate6 = "";
  let forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);

    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);

    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-3">
      {showData === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-sm-12 col-md-4 text-center d-flex flex-column align-items-center justify-content-center">
                <div className="position-absolute text-light bg-dark px-4 py-2 rounded opacity-75">
                  <h3 className="text-center">{weather.name}</h3>
                  <p className="card-date">
                    <span className="h4"><TbCalendarTime/> </span>
                    {date}
                  </p>
                  <h1 className="text-primary bg-white opacity-50 rounded-top">
                    {(weather.main.temp - 273.15).toFixed(1)}°C
                  </h1>
                  <p className="text-capitalize">
                    <img src={iconUrl} alt="icon" />
                    {weather.weather[0].description}
                  </p>
                </div>
                <img
                  className="img-fluid rounded-start"
                  src="https://images.pexels.com/photos/12664826/pexels-photo-12664826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="city"
                />
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">
                    <span className="h4 text-primary"><TbTemperaturePlus/> </span>
                     Temperatura máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(0)} °C
                  </h5>
                  <h5 className="card-text">
                    <span className="h4 text-primary"><TbTemperatureMinus/> </span>
                    Temperatura mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(0)} °C
                  </h5>
                  <h5 className="card-text">
                  <span className="h4 text-primary"><TbTemperature/> </span>
                    Sensación térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(0)} °C
                  </h5>
                  <h5 className="card-text">
                    <span className="h4 text-primary"><TbDroplet/> </span>
                    Humedad: {weather.main.humidity} %
                  </h5>
                  <h5 className="card-text">
                    <span className="h4 text-primary"><TbWind/> </span>
                    Viento: { ((weather.wind.speed )*3.6).toFixed(0) } km/h
                  </h5>
                </div>
                <hr />
                <div className="row mt-4">
                  <ForecastItem temp={(forecast.list[1].main.temp - 273.15).toFixed(0)} iconUrl={iconUrl3} desc={forecast.list[1].weather[0].description} date={forecastDate3} />
                 
                  <ForecastItem temp={(forecast.list[2].main.temp - 273.15).toFixed(0)} iconUrl={iconUrl6} desc={forecast.list[2].weather[0].description} date={forecastDate6} />

                  <ForecastItem temp={(forecast.list[3].main.temp - 273.15).toFixed(0)} iconUrl={iconUrl9} desc={forecast.list[3].weather[0].description} date={forecastDate9} />

                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-light text-center">No hay datos para mostrar</h2>
      )}
    </div>
  );
};

export default Card;
