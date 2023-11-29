import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    //?Aqui
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4fc0fe599168728fb586669bbd4dd9f1&lang=es&units=metric`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  const bgImages = {
    "01d": "bg-[url(/images/sky_d.jpg)]",
    "01n": "bg-[url(/images/sky_n.jpg)]",
    "02d": "bg-[url(/images/few_d.jpg)]",
    "02n": "bg-[url(/images/few_n.jpg)]",
    "03d": "bg-[url(/images/scattered_d.jpg)]",
    "03n": "bg-[url(/images/scattered_n.jpg)]",
    "04n": "bg-[url(/images/clouds_n.jpg)]",
    "04d": "bg-[url(/images/clouds_d.jpg)]",
    "09d": "bg-[url(/images/rain_d.jpg)]",
    "09n": "bg-[url(/images/rain_n.jpg)]",
    "10d": "bg-[url(/images/rain_d.jpg)]",
    "10n": "bg-[url(/images/rain_n.jpg)]",
    "11d": "bg-[url(/images/thunder_d.jpg)]",
    "11n": "bg-[url(/images/thunder_n.jpg)]",
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  console.log(weather?.weather[0].icon);
  return (
    <main
      className={`flex justify-center items-center h-screen font-lato bg-cover bg-center  ${
        bgImages[weather?.weather[0].icon]
      }`}
    >
      {weather ? <WeatherDetail weather={weather} /> : <span>Cargando...</span>}
    </main>
  );
}

export default App;

//  bg_ligth dark:bg_dark

{
  /* <main
      className={`flex justify-center items-center h-screen font-lato bg-cover bg-center  ${
        bgImages[weather?.weather[0].icon]
      }`}
    ></main> */
}
