import styled from 'styled-components';

export const Container = styled.button`
	position: relative;
  	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 12px 15px;

	:not(:last-child):not(:hover) :before {
		content: '';
		position: absolute;
		bottom: -1px;
		right: 0;
		width: calc(100% - 42px - 40px);
		height: 1px;
		background-color: var(--quinary);
	}

	:hover {
		background-color: var(--quaternary2);
	}
`;

export const InfoMessage = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	div {
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const Titile = styled.h4`
	font-weight: 400;
  	color: var(--input-color);
	font-size: 17px;
	margin-bottom: 2px;
	text-align: start;
`;

export const SubTitile = styled.span`
  	color: var(--input-placeholder);
	font-weight: 500;
	font-size: 14px;
`;

export const ButtonsOptions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	div {
		display: flex;
		flex-direction: row;
	}
`;