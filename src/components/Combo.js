import React, {Component} from 'react';

class Combo extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            editing: false
        }
    }

   edit(){
       const {combo} = this.props;
       this.setState({
           editing: true
       })
       this.props.setEdit(combo.sandwhich, combo.chips, combo.drink)
   }

   updateCombo(id){
       this.props.updateCombo(id);

       this.setState({
           editing: false
       })
   }
  
   render(){
       const {combo, deleteCombo} = this.props
       return(
           <div>
               <h2>Combo:</h2>
               <p>Sandwich: {combo.sandwich}</p>
               <p>Chips: {combo.chips}</p>
               <p>Drink: {combo.drink}</p>
               <button onClick={()=> deleteCombo(combo.id)}>Remove</button>
               {this.state.editing ? (
                   <button onClick={()=> this.updateCombo(combo.id)}>Save</button>
               ) : (
                   <button onClick={()=> this.edit()}>Change</button>
               )}
           </div>
       )
   }

}

export default Combo