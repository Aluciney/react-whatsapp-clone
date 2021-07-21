import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	background-color: var(--secondary);
	padding: 0 15px;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	height: 100%;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35px;
	height: 100%;
	margin: 0 5px;
	
	svg {
		font-size: 24px;
		color: var(--input-placeholder);
	}
`;