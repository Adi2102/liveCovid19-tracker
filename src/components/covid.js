import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
      );
      const actualData = await res.json();
      console.log(actualData);
      setData(actualData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1> 🔴 LIVE </h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span> OUR </span> COUNTRY
                </p>
                <p className="card__total card__small"> INDIA </p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main1">
              <div className="card__inner1">
                <p className="card__name1">
                  <span> TOTAL </span> RECOVERED
                </p>
                <p className="card__total1 card__small1"> {data.recovered} </p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main2">
              <div className="card__inner2">
                <p className="card__name2">
                  <span> NEW </span> DEATHS
                </p>
                <p className="card__total2 card__small2"> {data.deathsNew} </p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main3">
              <div className="card__inner3">
                <p className="card__name3">
                  <span> TOTAL </span> DEATHS
                </p>
                <p className="card__total3 card__small3"> {data.deaths} </p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main4">
              <div className="card__inner4">
                <p className="card__name4">
                  <span> TOTAL </span> ACTIVE
                </p>
                <p className="card__total4 card__small4">
                  {" "}
                  {data.activeCases}{" "}
                </p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__main5">
              <div className="card__inner5">
                <p className="card__name5">
                  <span> LAST </span> UPDATED
                </p>
                <p className="card__total5 card__small5">
                  {" "}
                  {data.lastUpdatedAtApify}{" "}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* <marquee behavior="scroll" direction="left">
        <p className="notice">
          INFO: This app is showing live covid data from 'Ministry of Health and
          Family Welfare' website.
        </p>
      </marquee> */}
    </>
  );
};

export default Covid;
