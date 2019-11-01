/* the by wrapping everything with the PROVIDER component we make our store AVAILABLE to every COMPONENT inside */
import React, { Component } from 'react';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux'; // this Provider Component from react-redux allows us to configure our app so that 
// the redux store becomes available to all the componenets to our application
import { ConfigureStore } from './redux/configureStore'; //  

const store = ConfigureStore(); // with this the store becomes available to us

class App extends Component {


  render(){
  
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            
              <Main />
          
          </div>
        </BrowserRouter>
      </Provider>

    )
  }

}

export default App
