import React from 'react';
import './style.css';

const Weather = () => {
    return (
        <>
            <div className="container">
                <div className="wrap">
                    <div className="search">
                        <input type="search" placeholder="Search here..." autoFocus id="search" className="searchItem"/>
                        <button type="button" className="searchButton"><i className="fas fa-search"></i></button>
                    </div>

                    <article className="widget">
                        <div className="weatherIcon">
                            <i className={"wi wi-day-sunny"}></i>
                        </div>
                        <div className="weatherInfo">
                            <div className="temp">
                                <span>25.5&deg;</span>
                            </div>
                            <div className="description">
                                <div className="weatherCondition">Sunny</div>
                                <div className="place">Pune, India</div>
                            </div>
                            <div className="date">{ new Date().toDateString()}</div>
                        </div>
                        <div className="extra-info">
                            <div className="minmax-info">
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-sunset"}></i></p>
                                    <p className="second-section">07:15 PM <br/> Sunset</p>
                                </div>
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-humidity"}></i></p>
                                    <p className="second-section">07:15 PM <br/> Humidity</p>
                                </div>
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-cloud-down"}></i></p>
                                    <p className="second-section">07:15 PM <br/> Pressure</p>
                                </div>
                                <div className="two-sided-section">
                                    <p><i className={"wi wi-strong-wind"}></i></p>
                                    <p className="second-section">07:15 PM <br/> Wind Speed</p>
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
