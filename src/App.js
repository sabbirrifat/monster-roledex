import React, { Component } from 'react';
import Cardlist from './components/Cardlist/Cardlist'
import SearchList from './components/SearchField/SearchField'
import './App.css';

class App extends Component{
  constructor(){
    super()


    this.state = {
      "searchField" : "",
      "monsters": []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json())
    .then(user => this.setState({monsters: user}, ))
  }

  handlechange = (e) => {
      this.setState({ searchField: e.target.value });
  }

  render(){
    const {monsters , searchField} = this.state;
    const sortedCards = monsters.filter(item => {
        return item.name.toLowerCase().includes(searchField.toLowerCase());
      });
  
    return(
       
       <div>
         <h1>Monster Roledox</h1>
         <SearchList handleChange= {this.handlechange} />
         
         <Cardlist cards= {sortedCards} search={searchField}/>
       </div>
    
    )
  }
}

export default App;
