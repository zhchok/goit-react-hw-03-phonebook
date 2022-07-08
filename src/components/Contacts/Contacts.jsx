import { Item, Button, Text, Icon, Contact, Title } from "./Contacts.styled";
import { AiOutlineUserDelete } from "react-icons/ai";
import { Box } from "components/box/box";
export function ContactsList({ contacts, onDeleteContact }) {
	return (
		<Box>
			<Title>Contacts</Title>
			<ul>
				{contacts.map(({ id, name, number }) => (
					<Item key={id}>
						<Contact>
							{name} : {number}
						</Contact>
						<Button type="button" onClick={() => onDeleteContact(id)}>
							<Text className="text">Delete</Text>
							<Icon className="icon">
								<AiOutlineUserDelete size="24px" fill="#eee" />
							</Icon>
						</Button>
					</Item>
				))}
			</ul>
		</Box>
	);
}
