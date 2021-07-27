import React, { useEffect, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { HiArrowLeft } from 'react-icons/hi';
import {
	Container,
	InputContainer,
	InputSearch,
	IconSearch
} from './styles';

const Search: React.FC = () => {

	const searchRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const serach = searchRef.current;
		if (serach) {
			const unsubscribe = serach.addEventListener('focus', () => {
				setIsFocused(true);
			});
			return () => unsubscribe;
		}
	}, [searchRef]);

	useEffect(() => {
		const serach = searchRef.current;
		if (serach) {
			const unsubscribe = serach.addEventListener('blur', () => {
				setIsFocused(false);
			});
			return () => unsubscribe;
		}
	}, [searchRef]);

	return (
		<Container>
			<InputContainer>
				<IconSearch>
					<IoIosSearch style={{ display: isFocused ? 'none' : 'block' }}/>
					<HiArrowLeft style={{ display: isFocused ? 'block' : 'none' }}/>
				</IconSearch>
				<InputSearch
					ref={searchRef}
					placeholder={'Pesquisar ou começar uma nova conversa'}
					onChange={e => setSearchText(e.target.value)}
					value={searchText}
				/>
			</InputContainer>
		</Container>
	);
}

export default Search;