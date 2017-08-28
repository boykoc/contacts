import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    console.log(ContactsAPI.getAll());
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }
  
  removeContact = (contact) => {
    // Updating state based on the current state so use setState by passing in 
    // function vs other that takes object.
    
    // Create a new contact state that returns the contacts excluding the one
    // that was clicked on.
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
    
    // Update API with remove.
    ContactsAPI.remove(contact)
  }
  
  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }
  
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={this.state.contacts} 
            onDeleteContact={this.removeContact}
          />        
        )} />
        <Route path='/create' render={({ history }) => (
          <CreateContact 
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
      </div>
    )
  }
}

export default App;
