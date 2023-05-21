import { nanoid } from 'nanoid';
import { Component } from 'react';
import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storagedContacts = JSON.parse(localStorage.getItem('contacts'));
    export const App = () => {
      const [contacts, setContacts] = useState(
        () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
      );
      const [filter, setFilter] = useState('');

    if (storagedContacts) this.setState({ contacts: storagedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      setFilter(value);
    }
  }


  addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const isAlreadyInContacts = this.state.contacts.some(
      contact =>
      const isAlreadyInContacts = contacts.some(
        contact.name.toLowerCase === name.toLowerCase() &&
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isAlreadyInContacts) {
      alert(`${name} is already in contacts`);
      const updateList = contacts => {
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  updateFilterValue = filter => {
    this.setState({ filter });
  };

  onUpdateList = (contacts, filter) => {
    if (!filter.length) return contacts;
    const filteredUsers = contacts.filter(contact =>
      nUpdateList = contacts =>
      setContacts(s => s.filter(contact => contact.id !== id)); {
        return contacts.filter(contact =>
      contact.name.toLowerCase().match(this.state.filter.toLowerCase())
    );

    return filteredUsers;
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.onUpdateList(contacts, filter);
    const { contacts } = this.state;
    const filteredContacts = this.onUpdateList(contacts);
    return (
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter updateFilterValue={updateFilterValue} />
        <Contacts contacts={updateList(contacts)} removeContact={removeContact} />
      </Phonebook>
    );
  };
    );
  }
}