import React from "react";
import {TbCalendarTime } from "react-icons/tb";

const ForecastItem = ({ temp, iconUrl, desc, date }) => {
  return (
    <div className="col-sm-12 col-md-4 text-center">
      <h4 className="text-primary bg-light w-75 mx-auto rounded-top py-2 opacity-50">{temp} °C</h4>
      <p className="text-capitalize text-secondary">
        <img src={iconUrl} alt="icon" />
        <br />
        {desc}
      </p>
      <p className="badge bg-primary text-uppercase p-2">
        <span className="h5"><TbCalendarTime/></span>
        {date}:00 hs
        </p>
    </div>
  );
};

export default ForecastItem;
