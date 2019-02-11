import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Combo from './components/Combo';
import Search from './components/Search'
import Image from './components/Image'
import SandwichImage from './components/SandwichImage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      combos: [],
      sandwich: '',
      chips: '',
      drink: '',
      filterString:''
    }
    this.handleSandwich = this.handleSandwich.bind(this);
    this.handleChips = this.handleChips.bind(this);
    this.handleDrink = this.handleDrink.bind(this);
    this.deleteCombo = this.deleteCombo.bind(this);
    this.createCombo = this.createCombo.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.searchFunction = this.searchFunction.bind(this);
  }
  handleSandwich(event){
   this.setState({
     sandwich: event.target.value
   })
  }
  handleChips(event){
     this.setState({
       chips: event.target.value
     })
  }
  handleDrink(event){
    this.setState({
      drink: event.target.value
    })
  }
  
  componentDidMount() {
    axios.get('/api/combos').then(response => {
      console.log(response);
      this.setState({
        combos: response.data
      })
    })
  }

  createCombo(sandwich, chips, drink){
    axios.post('/api/combo', {sandwich, chips, drink}).then(response => {
      this.setState({
        combos: response.data,
        sandwich: '',
        chips: '',
        drink: '' 
      })
    })
  }

  deleteCombo = (id) =>{
    axios.delete(`/api/combo/${id}`).then(response => {
      this.setState({
        combos: response.data
      })
    })
  }

  updateCombo = (id) =>{
    const {sandwich, chips, drink} = this.state;
    axios.put(`/api/combo/${id}`, {sandwich, chips, drink}).then(response =>{
      this.setState({
        combos: response.data,
        sandwich: '',
        chips: '',
        drink: ''
      })
    })
  }

  setEdit(sandwich, chips, drink){
    this.setState({
      sandwich,
      chips,
      drink
    })
  }

  searchFunction(val) {
    this.setState({
      filterString: val
    })
  }

  








  render() {
    const { sandwich, chips, drink} = this.state;
    const mappedCombos = this.state.combos.filter((obj,i) => {return obj.sandwich.includes(this.state.filterString)}).map(combo => {
      return(
        <Combo
          key={combo.id}
          combo={combo}
          deleteCombo={this.deleteCombo}
          updateCombo={this.updateCombo}
          setEdit={this.setEdit}
         />
      );
    });
    return (
      <div>
        <Image />
       <Search searchFunction={this.searchFunction}/>
        <form>
          <h1>Super Manwich</h1>
          
        <input
         value={this.state.sandwich}
         placeholder='Enter A Sandwhich'
         type='text' 
         onChange={this.handleSandwich}
         />
        <input 
          value={this.state.chips}
          placeholder='Enter Chips'
          type='text'
          onChange={this.handleChips}
          />
        <input
          value={this.state.drink}
          placeholder='Enter A Drink' 
          type='text' 
          onChange={this.handleDrink}/>
        <button onClick={()=>this.createCombo(sandwich, chips, drink)}>Create Combo Now!</button>
        <div>
        <SandwichImage />
      {mappedCombos}
      <div><SandwichImage/></div>
        
        </div>
      </form>
      </div>

    );
  }
}

export default App;
