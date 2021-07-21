import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import {
	Container,
	ImageAvatar
} from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLElement> {
	isUser?: boolean;
}

const Avatar: React.FC<Props> = ({ isUser }) => {
	return (
		<Container>
			<ImageAvatar src="https://github.com/Aluciney.png" isUser={isUser} />
		</Container>
	);
}

export default Avatar;