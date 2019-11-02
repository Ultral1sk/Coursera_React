import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent'
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; // we import the withRouter we need it to connect other comp later
import { connect } from 'react-redux'; // 


/*  this is maping the redux Store STATE into PROPS  that will become available into our component*/
/*  this is the state from the redux store */
const mapStateToProps = state => {
  /* these are not available as PROPS from the REDUX store to our Component */
    return {
      dishes: state.dishes,
      comments : state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = ''
}

 
 render(){

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
           
          />
      );
    }

    const DishWithId = ( {match} ) => {
        
      return(
        <div>
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
       
        </div>
      );
      
    }
   
    return(
     
      <div className="App">
          
            <Header />
              <Switch>
                <Route path="/home" component={HomePage} />     
                <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
                <Route path="/menu/:dishId" component={DishWithId}/>
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/home" />
              </Switch>
            <Footer />
      </div>
    )
  }

}

export default withRouter((connect(mapStateToProps)(Main)));
// we are connection the  newly connected component to our STORE with the CONNECT function(component);
// which is taking the mapStateToProps function as parameter  and the ACTUAL Component in this case Main component as parameter
// but on onrder to connect this to our store we wrap everythign with the withRouter
