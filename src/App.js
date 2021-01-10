import React, { Component } from 'react';
import Search from './component/search-box/search-box'
import './App.css';
import CardList from './component/card-list/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(users => users.json())

      .then(users => this.setState({ monsters: users }));

  }

handleChange=event=>{
  this.setState({searchField:event.target.value});
};



  
  render() {
    const {monsters,searchField}=this.state;    //destructing only to use properties as a const value
    const filteresMonsters=monsters.filter((monster)=>{
     return( monster.name.toLowerCase().includes(searchField.toLowerCase()))
    })


    //-----------------------without destucturing
    // const filteresMonsters=this.state.monsters.filter((monster)=>{
    //  return( monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    // })
    return (
      <div className="App">
        
         <h1 className='heading'>Monsters Rolodox</h1>
        {/* <Search  type='search'  placeholder='Search Engine'  onChange={(event)=>{this.setState({searchField:event.target.value}); */}
        <Search  placeholder='Search-Box'  onChange={this.handleChange}/>

         <CardList monster={filteresMonsters}/>
          
        
      

      </div>
    );
  }
}

export default App;

