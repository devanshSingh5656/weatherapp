import React, { useState } from "react";
import "./Main.css";
import SearchIcon from "@material-ui/icons/Search";
import CloudQueueTwoToneIcon from "@material-ui/icons/CloudQueueTwoTone";
function Main({ error, setname, data }) {
  const [initial, setinitial] = useState("");
  let date = new Date().toString();
  let time = date.slice(16, 21);
  let day = date.slice(0, 3);
  let mainDate = date.slice(4, 15);

  const keyPresss = (e) => {
    if (e.key === "Enter") {
      setname(initial);
      setinitial("");
    }
  };
  // console.log(data);
  return (
    <div className={`${data && data.weather[0].main}`}>
      <div className="container-fluid ">
        <div className="row main">
          <div className="col-lg-9 col-md-7">
            <div className="main__left d-md-flex align-items-end justify-content-center">
              <div className="col-lg-3 col-md-5 d-flex justify-content-md-end  main__left__heading">
                <h1>{~~(data.main?.temp - 273.15)}</h1>

                <h1>&deg;</h1>
              </div>
              <div className="col-lg-3 ">
                <h2>
                  {data?.name},{data && data?.sys?.country}
                </h2>
                <p>
                  {time}-{day},{mainDate}
                </p>
              </div>
              <div className="col-lg-6   ">
                {data && data?.weather[0]?.main === "Clear" ? (
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Sun-256.png"
                    alt="no load"
                    width="90px"
                    height="90px"
                  />
                ) : data && data?.weather[0]?.main === "Haze" ? (
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/weather-filled-outline-2/64/day_haze-256.png"
                    alt="no load"
                    width="90px"
                    height="90px"
                  />
                ) : (
                  <CloudQueueTwoToneIcon style={{ fontSize: 60 }} />
                )}

                <p className="lead">{data && data?.weather[0]?.main}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 " style={{ padding: 0 }}>
            <div className="main__right">
              <div className="header__searchBar" onKeyPress={keyPresss}>
                <input
                  placeholder={error}
                  value={initial}
                  type="text"
                  onChange={(e) => setinitial(e.target.value)}
                />
                <SearchIcon style={{ color: "orange" }} />
              </div>
              <div className="main__right__data">
                <div className="main__right__weather">
                  <div className="d-flex mt-4">
                    <h3 className="pb-2">Weather Details</h3>
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Rainbow-512.png"
                      alt="no load"
                      className="ml-3"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Weather_Type</p>
                    <p className="ml-auto">{data && data?.weather[0]?.main}</p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Feels_Like</p>
                    <p className="ml-auto">
                      {~~(data.main?.feels_like - 273.15)}&deg;
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Humidity</p>
                    <p className="ml-auto">{data.main?.humidity}%</p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Max_Temprature</p>
                    <p className="ml-auto">
                      {~~(data.main?.temp_max - 273.15)}&deg;
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Min_Temprature</p>
                    <p className="ml-auto">
                      {~~(data.main?.temp_min - 273.15)}&deg;
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Sea_Level</p>
                    <p className="ml-auto">{data.main?.grnd_level}m</p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Visibility</p>
                    <p className="ml-auto">{data?.visibility / 1000}Km</p>
                  </div>
                </div>
                <hr className="right__line" />
                <div>
                  <div className="d-flex">
                    <h3>Coordinates</h3>
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/aami-flat-map-pins-and-navigation/64/location-06-512.png"
                      alt="no load"
                      width="50px"
                    />
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Lattitude</p>
                    <p className="ml-auto">{data && data?.coord.lat}&deg;</p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Longitude</p>
                    <p className="ml-auto">{data && data?.coord.lon}&deg;</p>
                  </div>
                </div>
                <hr className="right__line" />

                <div className="">
                  <div className="d-flex">
                    <h3>Wind</h3>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699847-icon-43-wind-512.png"
                      alt="no data"
                      width="50px"
                    />
                  </div>
                  <div className="d-flex">
                    <p className="right_p">Wind_Speed</p>
                    <p className="ml-auto">{data.wind?.speed}km/h</p>
                  </div>
                  <div className="d-flex">
                    <p className="right_p">degree</p>
                    <p className="ml-auto">{data.wind?.deg}km/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
