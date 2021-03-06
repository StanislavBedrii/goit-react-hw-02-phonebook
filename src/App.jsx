import { Component } from 'react';

import ContactForm from './components/Contacts/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/Contacts/ContactList';
import Container from './components/Container';
import Section from './components/Section';

import handleInput from './utils/handleInput';
import addContact from './utils/addContact';
import onDeleteContactItem from './utils/onDeleteContactItem';
import onVisibleContacts from './utils/onVisibleContacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInput = handleInput.bind(this);
  addContact = addContact.bind(this);
  onDeleteContactItem = onDeleteContactItem.bind(this);
  onVisibleContacts = onVisibleContacts.bind(this);

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onAddedContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          <div>
            <Filter
              searchFilter={this.state.filter}
              handler={this.handleInput}
            />

            <ContactList
              visible={this.onVisibleContacts}
              deleteContactItem={this.onDeleteContactItem}
            />
          </div>
        </Section>
      </Container>
    );
  }
}
