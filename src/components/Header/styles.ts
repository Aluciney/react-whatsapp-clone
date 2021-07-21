import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface DefaultActionButtonProps extends ButtonHTMLAttributes<HTMLElement> {
	isClose?: boolean;
}

export const Container = styled.div`
	grid-area: H;
	background-color: var(--tertiary);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	-webkit-app-region: drag;

	span {
		margin-left: 10px;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.9);
	}
`;

export const WindowActions = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`

export const DefaultActionButton = styled.button<DefaultActionButtonProps>`
	background: transparent;
	-webkit-app-region: no-drag;
	border: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #767e88;
	width: 40px;
	height: 100%;

	cursor: default;

	svg {
		font-size: 16px;
		color: rgba(255, 255, 255, 0.95);
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	&.close:hover  {
		background-color: #c71717;
	}

	&:active {
		opacity: 0.6;
	}

	&:focus {
		outline: 0;
	}
`;
