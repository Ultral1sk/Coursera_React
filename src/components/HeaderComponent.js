import React, { Component } from 'react';
import { Navbar , NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState( { isNavOpen : !this.state.isNavOpen } );
    }
    
    render() {
        return(

            <>
                <Navbar dark expand="md">
                  <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" 
                            height="30" width="41"
                            alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                  </div>
                </Navbar>  
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                    <p>We take inspiration from the Wordld's best cusines,
                                    and crate a unique fusion experience.
                                    Our lipsmacking creation will tickle your culinary senses!
                                    </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </>
        );
    }
}

export default Header


/* we are going to move the NAVBAR from the 
main component into the HEADER  and create also a FOOTER HERE*/

//  <> this is a REACT FRAGMENT which enables us to group together a bunch of react elements
// and group them together the short version is <> and the long <React.Fragment>
//by using a div we just add another exxtra node to the DOM and with react fragment we don't