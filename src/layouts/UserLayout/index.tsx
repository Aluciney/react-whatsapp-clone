import React from 'react';
import Header from '../../components/Header';
import MessageList from '../../components/MessageList';
import MessageContent from '../../components/MessageContent';

import {
	Grid
} from './styles';

const UserLayout: React.FC = () => {
	return (
		<Grid>
			<Header />
			<MessageList />
			<MessageContent />
		</Grid>
	);
}

export default UserLayout;