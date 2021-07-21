import React from 'react';
import HeaderProfile from '../HeaderProfile';
import Search from '../Search';
import MessageItem from '../MessageItem';
import { 
	Container,
	List
} from './styles';

const MessageList: React.FC = () => {
	return (
		<Container>
			<HeaderProfile />
			<Search />
			<List>
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
				<MessageItem />
			</List>
		</Container>
	);
}

export default MessageList;