import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import axios from 'axios';


class Contact extends Component {
  state = {
    showContactInfo: false //handle to show email and phone
  }

  

  onShowClick = e => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  };


  // Expression to toggle the dropdown arrow.
  // Add a pointer to hover over dropdown arrow.
  // Add a delete button for contacts.
  render() {
    const {id, name, email, phone } = this.props.contact; //using destructuring for neater code loyout
    const {showContactInfo} = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return(
            <div className="card card-body mb-3">
              <h4>{name}{' '} <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer' }} />
                <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                <Link to={`contact/edit/${id}`}>
                  <i 
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>   
    );
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};
   

export default Contact;