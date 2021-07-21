import React, { useCallback, useEffect, useState } from 'react';
import { FiX, FiMinus } from 'react-icons/fi';
import { BiWindow, BiWindows } from 'react-icons/bi';

import {
	Container,
	WindowActions,
	DefaultActionButton
} from './styles';

const Header: React.FC = () => {

	const [isMaximized, setIsMaximized] = useState(false);

	const handleCloseWindow = useCallback(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();

		window_.close();
	}, [])

	const handleMaximize = useCallback(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();

		if (!window_.isMaximized()) {
			window_.maximize();
		} else {
			window_.unmaximize();
		}
	}, [])

	const handleMinimize = useCallback(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();

		window_.minimize();
	}, [])

	useEffect(() => {
		const window_ = window.require('electron').remote.getCurrentWindow();
		setIsMaximized(window_.isMaximized());

		window_.on('maximize', () => {
			setIsMaximized(true);
		});
		window_.on('unmaximize', () => {
			setIsMaximized(false);
		});
	}, []);

	return (
		<Container>
			<span>WhatsApp</span>
			<WindowActions>
				<DefaultActionButton onClick={handleMinimize}>
					<FiMinus />
				</DefaultActionButton>
				<DefaultActionButton onClick={handleMaximize}>
					{isMaximized ? (
						<BiWindows size={12} />
					) : (
						<BiWindow size={12} />
					)}
				</DefaultActionButton>
				<DefaultActionButton isClose={true} onClick={handleCloseWindow}>
					<FiX />
				</DefaultActionButton>
			</WindowActions>
		</Container>
	);
}

export default Header;