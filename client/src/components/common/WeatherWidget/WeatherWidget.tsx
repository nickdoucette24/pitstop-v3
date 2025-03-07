import React from "react";

type Props = {};

const WeatherWidget = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <h4>Weather at the Track</h4>
          <span>As of Fri Mar 7, 2025</span>
        </div>
        <div>
          <h5>Wind</h5>
          <span>20km/h</span>
          <span>NW</span>
        </div>
      </div>
      <div>
        <span>Air Temperature</span>
        <span>Track Temperature</span>
        <div>
          <span>Rainfall</span>
          <span>Humidity</span>
          <span>Pressure</span>
        </div>
      </div>
      <div>
        <h5>Race Week Forecast</h5>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
