import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts
    
    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          {name: 'Austin Powers'},
          {name: 'Basil'},
          {name: 'Dr. Evil'}
        ]}/>
        <ContactList contacts={[
          {name: 'Mini-Me'},
          {name: 'OddJob'},
          {name: 'Number 2'}
        ]}/>
      </div>
    );
  }
}

export default App;
