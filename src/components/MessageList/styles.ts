import styled from 'styled-components';

export const Container = styled.div`
  	grid-area: ML;
	background-color: var(--primary);
	box-shadow: var(--quinary) 1px 0px 0px 0px;
	z-index: 2;
`;

export const List = styled.div`
  	display: flex;
	flex-direction: column;
	max-height: calc(100vh - 50px - 60px - 30px);
	overflow-y: auto;

	::-webkit-scrollbar {
		width: 7px;
	}
 
	::-webkit-scrollbar-thumb {
		background-color: #394045;
	}
`;