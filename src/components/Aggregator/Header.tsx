import { Heading, Image } from '@chakra-ui/react';
import styled from 'styled-components';
import loaderImg from '~/public/title-logo-words.png';

const Wrapper = styled.div`
	position: absolute;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	width: calc(100% - 32px);

	@media screen and (min-width: ${({ theme }) => theme.bpMed}) {
		position: relative;
		width: 100%;
	}
`;

const Name = styled(Heading)`
	font-size: 26px;

	@media screen and (min-width: ${({ theme }) => theme.bpLg}) {
		margin: 0 auto;
	}
`;

const Header = ({ children }) => {
	return (
		<Wrapper
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Name
				fontSize={['26px', '26px', '32px', '32px']}
				display="flex"
				alignItems="center"
				onClick={() => window.open('https://llamaswap-interface.vercel.app/')}
				cursor="pointer"
			>
				<Image
					src={loaderImg.src}
					w={['264px', '264px', '264px', '264px']}
					h={['48px', '48px', '48px', '48px']}
					mr="8px"
					alt="logo"
				/>
				{/* {'SoulSwap'} */}
			</Name>
			{children}
		</Wrapper>
	);
};

export default Header;
