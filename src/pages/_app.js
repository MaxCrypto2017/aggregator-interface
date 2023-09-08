import * as React from 'react';
import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { WagmiConfig, createClient } from 'wagmi'
import '~/Theme/globals.css';
import { WalletWrapper } from '~/components/WalletProvider';

function App({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient());

	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);
	// const wagmiClient = createClient({
	// 	autoConnect: true,
	// 	connectors,
	// 	provider,
	// 	webSocketProvider
	//   })
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				{/* <WagmiConfig client={wagmiClient}> */}
				<ChakraProvider>
					<DarkMode>
						{isMounted && (
							<WalletWrapper>
								<Component {...pageProps} />
							</WalletWrapper>
						)}
					</DarkMode>
				</ChakraProvider>
				{/* </WagmiConfig> */}
			</Hydrate>
		</QueryClientProvider>
	);
}

export default App;
