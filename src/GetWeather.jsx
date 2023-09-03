import axios from "axios";
import { useState, useEffect } from "react";

export const GetWeather = (props) => {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  function initGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    } else {
      alert(
        "Sorry, your current reality does not support geolocation services"
      );
    }
  }

  function success(position) {
    setLong(position.coords.longitude);
    setLat(position.coords.latitude);
  }
  function fail() {
    //could not obtain location
  }

  initGeolocation();

  const [posts, setPosts] = useState({
    temperature: 0,
    windspeed: 0,
    maxTemp: 0,
    minTemp: 0,
    precip: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=auto&forecast_days=1`
        );
        console.log(res.data);
        const { current_weather, daily } = res.data;
        setPosts({
          temperature: current_weather.temperature,
          windspeed: current_weather.windspeed,
          maxTemp: daily.temperature_2m_max,
          minTemp: daily.temperature_2m_min,
          precip: daily.precipitation_probability_max[0],
        });
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="weather">Current Temp {posts.temperature}°</div>
      <div className="maxTemp">High {posts.maxTemp}°</div>
      <div className="minTemp">Low {posts.minTemp}°</div>
      <div className="wind">Windspeed {posts.windspeed} mph</div>
      <div className="precip">Precipitation {posts.precip} %</div>
    </div>
  );
};

//   return axios await
//     .get(
//       "https://api.open-meteo.com/v1/forecast?latitude=33.7804&longitude=-118.1587&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=auto&forecast_days=1",
//       {
//         params: {
//           latitude: lat,
//           longitude: lon,
//           timezone,
//         },
//       }
//     )
//     .then(({ data }) => {
//       console.log(data);
//       const temperature = data.current_weather.temperature;
//       return <h1>Hello</h1>;
//     });
// };
