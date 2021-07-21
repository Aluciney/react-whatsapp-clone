import React, { ButtonHTMLAttributes } from 'react';
import Avatar from '../Avatar';

import {
	Container,
	Titile,
	SubTitile,
	InfoMessage,
	ButtonsOptions
} from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLElement> {
	active?: boolean;
}

const MessageItem: React.FC<Props> = ({ active }) => {
	return (
		<Container className={active ? 'active' : ''}>
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