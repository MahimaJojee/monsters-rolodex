import React from "react";
import "./App.css";
import { CardList } from "./Component/card-list/card-list.component.jsx";
import {SearchBox } from "./Component/search-box/search-box.component.js"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) =>{
          this.setState({ searchField: e.target.value })  
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox placeholder="Get the monster"
        handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
