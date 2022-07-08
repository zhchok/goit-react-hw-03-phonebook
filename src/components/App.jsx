import { Component } from "react";
import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/box";
import { PhonebookForm } from "./Form/Form";
import { ContactsList } from "./Contacts/Contacts";
import { nanoid } from "nanoid";
import { SearchBox } from "./SearchBox/SearchBox";

export class App extends Component {
	state = {
		contacts: [
			{ id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
			{ id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
			{ id: nanoid(), name: "Eden Clements", number: "645-17-79" },
			{ id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
		],
		filter: "",
	};

	addContact = (name, number) => {
		const contact = {
			id: nanoid(),
			name,
			number,
		};
		const { contacts } = this.state;

		if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
			alert(`${name} is already in contacts.`);
			return;
		}
		this.setState(prevState => ({
			contacts: [contact, ...prevState.contacts],
		}));
	};

	deleteContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== contactId),
		}));
	};

	changeFilter = e => {
		this.setState({ filter: e.currentTarget.value });
	};

	getVisibleContacts = () => {
		const { filter, contacts } = this.state;
		const normalizedFilter = filter.toLowerCase();

		return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
	};

	render() {
		const { filter } = this.state;
		const visibleContancts = this.getVisibleContacts();

		return (
			<Box textAlign="center" margin="0 auto" width="500px">
				<GlobalStyle />

				<PhonebookForm onSubmit={this.addContact} />
				<SearchBox value={filter} onChange={this.changeFilter} />

				<ContactsList contacts={visibleContancts} onDeleteContact={this.deleteContact}></ContactsList>
			</Box>
		);
	}
}
