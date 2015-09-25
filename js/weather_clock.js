var Clock = React.createClass({
  getInitialState: function(){
    return {time: new Date()};
  },

  componentDidMount: function(){
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  tick: function(){
    this.setState({time: new Date()});
  },

  render: function (){
    var time = this.state.time;
    return (
      <div>
        <span>{time.toLocaleTimeString() + " " + time.toLocaleDateString()}</span>
      </div>
    );
  },
});

React.render(
  <Clock/>,
  document.getElementById('weather-clock')
)
