import styled from 'styled-components';

export const Container = styled.div`
	height: 50px;
	width: 100%;
  	box-shadow: var(--quinary) 0px 1px 0px 0px;
	padding: 7px 15px;
	z-index: 2;
`;

export const InputContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: var(--quaternary2);
	border-radius: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
`;

export const InputSearch = styled.input`
	height: 100%;
	width: 100%;
	background: none;
	border: 0;
	text-justify: center;
	padding-bottom: 3px;
	color: var(--input-color);
	:focus {
		outline: 0px;
	}
	::placeholder {
		color: var(--input-placeholder);
	}
`;

export const IconSearch = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	margin-right: 30px;
	svg {
		color: var(--input-placeholder);
		font-size: 18px;
	}
`;

