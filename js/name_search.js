var NameSearch = React.createClass({
  getInitialState: function(){
    return { searchString: '' };
  },

  handleClick: function (event){
    var name = event.currentTarget.innerHTML.match(/[a-z]+/i)[0];
    this.setState({searchString: name});
  },

  handleSearch: function(event){
    this.setState({searchString: event.target.value});
  },

  render: function() {
    var list = this.props.names,
        searchString = this.state.searchString.trim().toLowerCase(),
        handleClick = this.handleClick;

    return (
      <div>
        <h5>{this.props.sex}</h5>
        <input className="name-input" type="text" value={this.state.searchString} onChange={this.handleSearch} placeholder="Search for Names" />

        <ul className="name-list">
        { list.map(function(name, i){
          var classNameVal = name.toLowerCase().match( searchString ) ? "" : "hidden";
          var line = i+1 + ". " + name
          return <li onClick={handleClick} className={classNameVal}>{line}</li>
        }) }
        </ul>

      </div>
    );
  }
})

var boys_name = ["Jackson", "Aiden", "Liam", "Lucas", "Noah", "Mason", "Ethan", "Caden", "Jacob", "Logan",
 "Jayden", "Elijah", "Jack", "Luke", "Michael", "Benjamin", "Alexander", "James", "Jayce", "Caleb",
 "Connor", "William", "Carter", "Ryan", "Oliver", "Matthew", "Daniel", "Gabriel", "Henry", "Owen",
 "Grayson", "Dylan", "Landon", "Isaac", "Nicholas", "Wyatt", "Nathan", "Andrew", "Cameron", "Dominic",
 "Joshua", "Eli", "Sebastian", "Hunter", "Brayden", "David", "Samuel", "Evan", "Gavin", "Christian",
 "Max", "Anthony", "Joseph", "Julian", "John", "Colton", "Levi", "Muhammad", "Isaiah", "Aaron",
 "Tyler", "Charlie", "Adam", "Parker", "Austin", "Thomas", "Zachary", "Nolan", "Alex", "Ian",
 "Jonathan", "Christopher", "Cooper", "Hudson", "Miles", "Adrian", "Leo", "Blake", "Lincoln", "Jordan",
 "Tristan", "Jason", "Josiah", "Xavier", "Camden", "Chase", "Declan", "Carson", "Colin", "Brody",
 "Asher", "Jeremiah", "Micah", "Easton", "Xander", "Ryder", "Nathaniel", "Elliot", "Sean", "Cole"
]
var girls_name = ["Sophia", "Emma", "Olivia", "Ava", "Isabella", "Mia", "Zoe", "Lily", "Emily", "Madelyn",
 "Madison", "Chloe", "Charlotte", "Aubrey", "Avery", "Abigail", "Kaylee", "Layla", "Harper", "Ella",
 "Amelia", "Arianna", "Riley", "Aria", "Hailey", "Hannah", "Aaliyah", "Evelyn", "Addison", "Mackenzie",
 "Adalyn", "Ellie", "Brooklyn", "Nora", "Scarlett", "Grace", "Anna", "Isabelle", "Natalie", "Kaitlyn",
 "Lillian", "Sarah", "Audrey", "Elizabeth", "Leah", "Annabelle", "Kylie", "Mila", "Claire", "Victoria",
 "Maya", "Lila", "Elena", "Lucy", "Savannah", "Gabriella", "Callie", "Alaina", "Sophie", "Makayla",
 "Kennedy", "Sadie", "Skyler", "Allison", "Caroline", "Charlie", "Penelope", "Alyssa", "Peyton", "Samantha",
 "Liliana", "Bailey", "Maria", "Reagan", "Violet", "Eliana", "Adeline", "Eva", "Stella", "Keira",
 "Katherine", "Vivian", "Alice", "Alexandra", "Camilla", "Kayla", "Alexis", "Sydney", "Kaelyn", "Jasmine",
 "Julia", "Cora", "Lauren", "Piper", "Gianna", "Paisley", "Bella", "London", "Clara", "Cadence"]

React.render(
  <Tabs tabs={[
    {title: "Boys' Name", list: boys_name},
    {title: "Girls' Name", list: girls_name}
  ]}/>,
  document.getElementById('name-search')
)
