import React from 'react';
import Avatar from '../Avatar';

import {
	Container,
	Titile,
	SubTitile,
	InfoMessage,
	ButtonsOptions
} from './styles';

const MessageItem: React.FC = () => {
	return (
		<Container>
			<InfoMessage>
				<Avatar />
				<div>
					<Titile>WhatsApp Clone </Titile>
					<SubTitile>+55 92 90000-0000: Teste</SubTitile>
				</div>
			</InfoMessage>
			<ButtonsOptions>
				<SubTitile>Ontem</SubTitile>
				<div>
					<SubTitile>A</SubTitile>
					<SubTitile>B</SubTitile>
				</div>
			</ButtonsOptions>
		</Container>
	);
}

export default MessageItem;