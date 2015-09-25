var Clock = React.createClass({
  getInitialState: function(){
    var geo = navigator.geolocation;
    geo.getCurrentPosition(this.setLocation);
    return {
      time: new Date(),
      coords: {latitude: 0, longitude: 0},
    };
  },

  componentDidMount: function(){
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  getWeather: function(){
    var xmlhtp,
        url = "http://api.openweathermap.org/data/2.5/weather?lat=#A&lon=#B",
        lat = this.state.coords.latitude,
        lon = this.state.coords.longitude,
        setWeather = this.setWeather.bind(this);
    url = url.replace(/#A/, lat).replace(/#B/, lon);

    xmlhttp = window.XMLHttpRequest && new window.XMLHttpRequest() ||
              window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if(xmlhttp.status == 200){
          setWeather(xmlhttp.responseText);
        } else {
          console.log("error in xml request to openweathermap.org, status: " + xmlhttp.status);
        }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },

  setLocation: function(position){
    this.setState({coords: position.coords});
    this.getWeather();
  },

  setWeather: function(resp){
    resp = JSON.parse(resp);
    this.setState({weather: resp});
  },

  tick: function(){
    this.setState({time: new Date()});
  },

  render: function (){
    var timeString = this.state.time.toLocaleTimeString(),
        dateString = this.state.time.toLocaleDateString(),
        lat = this.state.coords.latitude,
        lon = this.state.coords.longitude,
        weather = this.state.weather;
        condition = temperature = "";
    lat = lat.toFixed(2);
    lon = lon.toFixed(2);

    if (weather) {
      condition = weather.weather[0].main;
      temperature = (+weather.main.temp - 273.15).toFixed(2);
    }

    return (
      <div>
        <p>{timeString + " " + dateString}</p>
        <p>{"your location is " + lat + " " + lon}</p>
        <p>Current condition: {condition}</p>
        <p>Current temperature: {temperature}</p>
      </div>
    );
  },
});

React.render(
  <Clock/>,
  document.getElementById('weather-clock')
)
