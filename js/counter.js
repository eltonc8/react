var ClickCounter = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },

  click: function(event){
    event.preventDefault();
    this.setState({count: this.state.count + 1});
  },

  render: function(){
    return (
      <div>
        <h4>A counter that increases each time you press the button</h4>
        <button onClick={this.click}>CLICK ME</button>
        <span> {this.state.count}</span>
      </div>
    );
  }
});

React.render(
  <ClickCounter/>,
  document.getElementById('my-component')
);
