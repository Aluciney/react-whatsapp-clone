import React from 'react';
import Avatar from '../Avatar';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { VscAdd } from 'react-icons/vsc';
import { RiLoader3Line } from 'react-icons/ri';
import { 
	Container,
	ButtonsContainer,
	Button
} from './styles';

const HeaderProfile: React.FC = () => {
	return (
		<Container>
			<Avatar isUser={true} />
			<ButtonsContainer>
				<Button>
					<RiLoader3Line />
				</Button>
				<Button>
					<VscAdd />
				</Button>
				<Button>
					<AiOutlineEllipsis />
				</Button>
			</ButtonsContainer>
		</Container>
	);
}

export default HeaderProfile;