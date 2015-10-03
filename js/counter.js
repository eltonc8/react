var ClickCounter = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },

  click: function(event){
    event.preventDefault();
    this.setState({count: this.state.count + 1});
  },

  render: function(){
    var colors = [" btn-primary", " btn-info", " btn-success", " btn-warning", " btn-danger"];
    return (
      <div>
        <h2>A counter that increases each time you press the button</h2>
        <div className="col-xs-8 col-sx-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5">
          <div className="row">
            <span className="lead col-xs-12 text-center">Click the button!</span>
          </div>
          <div className="row">
          <button className={"lead btn col-xs-12" + colors[this.state.count % 5]}
                  onClick={this.click}>{this.state.count}</button>
          </div>
        </div>
      </div>
    );
  }
});

React.render(
  <ClickCounter/>,
  document.getElementById('counter')
);
