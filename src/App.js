import React, { Component } from 'react';
import Menu from './components/MenuComponent'
import { Navbar , NavbarBrand} from 'reactstrap'
import './App.css';
import DISHES from './shared/dishes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return(
      <div>
        <Navbar dark color="primary" />
          <div className="container">
            <Menu dishes={this.state.dishes} />
        </div>
      </div>
    )
  }

}

export default App
