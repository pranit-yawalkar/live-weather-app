import React, {useState, useEffect} from 'react';
import './style.css';

const Weather = () => {
    const [searchValue, setSearchValue] = useState("Nashik");
    const [weatherInfo, setWeatherInfo] = useState({});
    const [weatherState, setWeatherState] = useState("");

    const getWeatherData = async() => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp, humidity, pressure} =  data.main;
            const {main:weatherCondition} = data.weather[0];
            const {name:city_name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            const myWeatherInfo = {
                temp, 
                humidity,
                pressure,
                weatherCondition,
                city_name,
                speed,
                country,
                sunset, 
            };
            setWeatherInfo(myWeatherInfo);
        } catch(error){
            console.log(error);
        }
    };

    let time = new Date(weatherInfo.sunset*1000);
    let timeStr = `${time.getHours()}:${time.getMinutes()}`

    useEffect(() => {
        getWeatherData();
    });

    useEffect(() => {
        if(weatherInfo.weatherCondition){
            switch (weatherInfo.weatherCondition){
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-fog");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherInfo.weatherCondition])

    return (
        <>
            <div className="container">
                <div className="wrap">
                    <div className="search">
                        <input type="search" placeholder="Search here..." autoFocus id="search" className="searchItem" value={searchValue} onChange={(e) =>setSearchValue(e.target.value)}/>
                        <button type="button" className="searchButton" onClick={getWeatherData}><i className="fas fa-search"></i></button>
                    </div>

                    <article className="widget">
                        <div className="weatherIcon">
                            <i className={`wi ${weatherState}`}></i>
                        </div>
                        <div className="weatherInfo">
                            <div className="temp">
                                <span>{weatherInfo.temp}&deg;C</span>
                            </div>
                            <div className="description">
                                <div className="weatherCondition">{weatherInfo.weatherCondition}</div>
                                <div className="place">{weatherInfo.city_name}, {weatherInfo.country}</div>
                            </div>
                            <div className="date">{ new Date().toDateString()}</div>
                        </div>
                        <div className="extra-info">
                            <div className="minmax-info">
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-sunset"}></i></p>
                                    <p className="second-section">{timeStr}<br/> Sunset</p>
                                </div>
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-humidity"}></i></p>
                                    <p className="second-section">{weatherInfo.humidity}%<br/> Humidity</p>
                                </div>
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-cloud-down"}></i></p>
                                    <p className="second-section">{weatherInfo.pressure} hPa<br/> Pressure</p>
                                </div>
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-strong-wind"}></i></p>
                                    <p className="second-section">{weatherInfo.speed} m/s<br/> Wind Speed</p>
                                </div>
                            </div>
                        </div>
                        
                    </article>
                </div>
            </div>
        </>
    )
}

export default Weather;
