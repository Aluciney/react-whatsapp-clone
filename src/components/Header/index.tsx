import React, { useState } from 'react';
import { FiX, FiMinus } from 'react-icons/fi';
import { BiWindow, BiWindows } from 'react-icons/bi';

import {
	Container,
	WindowActions,
	DefaultActionButton
} from './styles';

const Header: React.FC = () => {
	const [isMaximized] = useState(false);

	return (
		<Container>
			<span>WhatsApp</span>
			<WindowActions>
				<DefaultActionButton>
					<FiMinus />
				</DefaultActionButton>
				<DefaultActionButton>
					{isMaximized ? (
						<BiWindows size={12} />
					) : (
						<BiWindow size={12} />
					)}
				</DefaultActionButton>
				<DefaultActionButton isClose={true}>
					<FiX />
				</DefaultActionButton>
			</WindowActions>
		</Container>
	);
}

export default Header;