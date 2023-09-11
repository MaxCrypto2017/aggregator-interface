import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
	Button,
	Checkbox,
	Heading,
	HStack,
	List,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Switch,
	Tooltip,
	useDisclosure
} from '@chakra-ui/react';
import { chunk } from 'lodash';
import { useLocalStorage } from '~/hooks/useLocalStorage';

export const Settings = ({ adapters, disabledAdapters, setDisabledAdapters, onClose: onExternalClose }) => {
	// sets: degen mode as default
	const [isDegenModeEnabled, setIsDegenModeEnabled] = useLocalStorage('llamaswap-degenmode', true);
	const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
	const onCloseClick = () => {
		onExternalClose();
		onClose();
	};
	const onClick = (name) => (e) => {
		const isChecked = e.target.checked;

		setDisabledAdapters((adaptersState) =>
			isChecked ? adaptersState.filter((adapterName) => adapterName !== name) : adaptersState.concat(name)
		);
	};
	const aggregatorChunks = chunk(adapters, 5);
	return (
		<>
			<Modal 
				isOpen={isOpen} 
				onClose={onCloseClick} 
				size={'sm'}
			>
				<ModalOverlay />
				<ModalContent 
				color={'#FFFFFF'} 
				justifyContent={'center'}
				>
					<ModalHeader>Settings</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<HStack mt={1} mb={4}>
							<Heading size={'xs'}>Degen Mode</Heading>{' '}
							<Tooltip label="Disable price impact warnings.">
								<InfoOutlineIcon />
							</Tooltip>
							<Switch onChange={() => setIsDegenModeEnabled((mode) => !mode)} isChecked={isDegenModeEnabled} />
						</HStack>
						<Heading size={'xs'}>Enabled Aggregators</Heading>

						<HStack mt={4}>
							{aggregatorChunks.map((aggs) => (
								<List key={aggs.join(',')} spacing={1.5}>
									{aggs.map((name: string) => (
										<ListItem key={name}>
											<Checkbox mr={2} isChecked={!disabledAdapters.includes(name)} onChange={onClick(name)} />
											{name}
										</ListItem>
									))}
								</List>
							))}
						</HStack>
					</ModalBody>

					<ModalFooter>
						<button 
							// colorScheme="purple" 
							// mr={3} 
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: "40px",
								width: "100%",
								border: "2px solid",
								borderRadius: "8px",
								marginBottom: '20px',
								backgroundColor: "#6A00FF"
							}}
							onClick={onCloseClick}
						>
							Close
						</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
