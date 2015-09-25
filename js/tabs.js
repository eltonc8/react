var Tabs = React.createClass({
  getInitialState: function(){
    return {index: 0};
  },

  handleClick: function (event){
    var index = +event.currentTarget.getAttribute("data-index")
    this.setState({index: index});
  },

  render: function(){
    var tabs = this.props.tabs,
        activeIndex = this.state.index,
        content = tabs[activeIndex],
        handleClick = this.handleClick;
    return (
      <div>
        <h4>2014 Top Names</h4>
        <p>Source: <a href="http://www.babycenter.com/">Baby Center</a></p>

        <ul className="tab-header">
        {
          tabs.map(function(tab, i){
            return <li onClick={handleClick} data-index={i}
                   className={i == activeIndex ? "selected" : ""}>{tab.title}</li>;
          })
        }
        </ul>

        <div className="tab-content">{<NameSearch names={content.list}/>}</div>
      </div>
    )
  },
});
