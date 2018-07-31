import React, { Component } from 'react';

class ShowResults extends Component {

  render(props) {
    return (
      <div className="results">

        {Array.prototype.slice.call(this.props.forecast).map((item) => {

            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            let unixdate = new Date(item.dt*1000);

            let date = unixdate.toLocaleDateString();
            let today = new Date().toLocaleDateString();
            date = date === today ? 'today' : date;

            let time = unixdate.getHours()+":00";
            let newDay = unixdate.getHours() === 1 ? 'True' : 'False'; //HACKY - MAYBE USE A STATE

            let temp = parseInt(item.main.temp, 10);
            let isItHot = 20 < parseFloat(temp) ? 'red' : 'blue';
            let desc = item.weather[0].description;

            return(
              <div className={isItHot} key={item.dt}>
                {newDay === 'True' ? date + ' ' : ''}
                {time+" - "+temp}&deg;C {desc}
                <img src={'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'} alt='{item.weather[0].icon}'/>
              </div>
            )
        })}
      </div>

    )
  }
}

class Data extends Component {
  constructor() {
		super();
		this.state = {
      forecast: {},
    };
  }
  fetchData() {
    const APIKEY = '062966771a1f364d4cda59cad49e6990';
    let CITY = 'Cambridge,uk';
		fetch('http://api.openweathermap.org/data/2.5/forecast?units=metric&q='+CITY+'&APPID='+APIKEY)
		.then(rawData => {
		   return rawData.json();
		})
    .then(jsonData => {
      this.setState({forecast: jsonData.list});
    })
  }
  componentDidMount() {
		this.fetchData();
	}
  render() {
    return (
      <div>
        <h3>Array of {this.state.forecast.length} objects are being returned from API and passed through as a single prop:</h3>
        <ShowResults forecast={this.state.forecast} />
      </div>
    )
  }
}

export default Data;
