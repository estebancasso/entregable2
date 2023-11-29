import { useState } from "react";

const WeatherDetail = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  // ? Se esta actualizando el estado de isCelsius
  const handleToogleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const celsiusToFahrenheit = (tempCelsius) => {
    // ? Si isCelsisus es verdadero me retorna la temperatura en °C
    if (isCelsius) {
      return `${tempCelsius.toFixed(1)}°C`;
    } else {
      const temF = (tempCelsius * (9 / 5) + 32).toFixed(1);
      return `${temF} °F`;
    }
  };

  return (
    <div>
      {/* <div className="relative ">
        <div className="absolute  bottom-16 ">
          <form action="">
            <input className="w-screen" type="search" name="" id="" />
          </form>
        </div>
      </div> */}
      <article className="text-center grid gap-4 sm:gap-6">
        <h3 className="text-2xl font-bold sm:text-3xl">
          {weather.name}, {weather.sys.country}
        </h3>

        <div className="text-black grid gap-4 sm:grid-cols-[370px_1fr]">
          {/* Seccion1:Temperatura, descripción e imagen */}
          <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-[1fr_1fr] items-center sm:rounded-[35px] sm:p-4">
            <h3 className="col-span-2 text-lg font-semibold text-gray-700 sm:text-2xl">
              {weather.weather[0].description}
            </h3>
            <span className="text-4xl sm:text-5xl">
              {celsiusToFahrenheit(weather.main.temp)}
            </span>
            <div>
              <img
                className="block mx-auto sm:w-28 sm:h-28"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
          </section>

          {/* Seccio2: Detalles adicionales del clima */}
          <section className="grid grid-cols-3 justify-items-center bg-white/60 p-2 rounded-xl sm:grid-cols-1 sm:items-center sm:justify-items-start sm:rounded-2xl sm:p-4">
            <div className="flex gap-1">
              <div>
                <img src="/wind.svg" alt="Icono de la velocidad del tiempo" />
              </div>
              <span className="text-xl">{weather.wind.speed}m/s</span>
            </div>
            <div className="flex gap-1">
              <div>
                <img src="/humidity.svg" alt="Icono de la humedad del tiempo" />
              </div>
              <span className="text-xl">{weather.main.humidity}%</span>
            </div>
            <div className="flex gap-1">
              <div>
                <img src="/pressure.svg" alt="" />
              </div>
              <span className="text-xl">{weather.main.pressure}hPa</span>
            </div>
          </section>
        </div>

        <div className="flex justify-center">
          <button
            className="w-36 h-9 bg-white rounded-2xl text-lg text-blue-700 px-2 py-1 sm:text-xl sm:w-40 "
            onClick={handleToogleTemperatureUnit}
          >
            Cambiar ° {isCelsius ? "F" : "C"}
          </button>
        </div>
      </article>
    </div>
  );
};
export default WeatherDetail;
