import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';
import styled from 'styled-components';
import { HistoryModal } from '../HistoryModal';

const Wrapper = styled.div`
	position: absolute;
	right: 0px;
	z-index: 100;
	display: flex;
	gap: 8px;
`;

const Connect = ({ tokenList = null, tokensUrlMap = {}, tokensSymbolsMap = {} }) => {
	// const { openConnectModal } = useConnectModal();
	return (
		<Wrapper>
			{/* <button
				style={{
					display: "flex",
					justifyItems: "center",
					justifyContent: "center",
					alignItems: "center",
					height: "40px",
					width: "196px",
					border: "2px solid",
					borderRadius: "8px",
					marginBottom: '20px',
					backgroundColor: "#6a00ff"
				}}
				onClick={openConnectModal}
			>
				Connect
			</button> */}
			{/* <ConnectButton chainStatus={'none'} /> */}
			{tokenList ? <HistoryModal tokensUrlMap={tokensUrlMap} tokensSymbolsMap={tokensSymbolsMap} /> : null}
		</Wrapper>
	);
};

export default Connect;
