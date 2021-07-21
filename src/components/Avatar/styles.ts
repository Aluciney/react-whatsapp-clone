import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ImageProps extends ImgHTMLAttributes<HTMLElement> {
	isUser?: boolean;
}

export const Container = styled.main`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ImageAvatar = styled.img<ImageProps>`
	width: ${props => props.isUser ? '42px' : '50px'};
	height: ${props => props.isUser ? '42px' : '50px'};
	border-radius: 50%;
	border: 1px solid var(--primary);
`;