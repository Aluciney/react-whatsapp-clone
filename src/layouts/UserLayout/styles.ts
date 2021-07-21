import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 400px auto;
	grid-template-rows: 30px auto;
	grid-template-areas:
		'H H'
		'ML MC';
	height: 100vh;
`;
