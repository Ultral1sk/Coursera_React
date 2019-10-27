import React, { Component } from 'react';
import { Navbar , NavbarBrand, Jumbotron} from 'reactstrap'

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             
        }
    }
    
    render() {
        return(

            <>
                <Navbar dark >
                  <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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