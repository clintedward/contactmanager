import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../../context';


class Contacts extends Component {
  render() {
    return (
        <Consumer> 
            {value => {
                const {contacts} = value;
                return (
                    <React.Fragment>
                        <h1 className="display-4 mb-2">
                            <span className="text-danger">Contact</span> List
                        </h1>
                        {contacts.map(contact => (
                            <Contact key={contact.id} contact={contact}
                            />
                        ))}
                    </React.Fragment> 
                );
            }} 
        </Consumer>
    )
  }
}

export default Contacts;

//This is to create a state, and embedding components into other components. 
//Inside Contacts component we have state that holds all different objects (contact list). 
//Then loop through each contacts in each state and output a specific contact component for each contact. 