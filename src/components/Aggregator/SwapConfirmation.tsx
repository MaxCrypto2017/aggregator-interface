import {
	Button,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SwapConfirmation = ({
	handleSwap,
	isUnknownPrice = false,
	isMaxPriceImpact = false,
	isDegenModeEnabled = true
}) => {
	const { isOpen, onToggle, onClose } = useDisclosure();
	const requiredText = isMaxPriceImpact ? 'trade' : 'confirm';
	const [value, setValue] = useState('');
	const isSwapDisabled = value?.toLowerCase() !== requiredText;

	const onPopoverClose = () => {
		setValue('');
		onClose();
	};

	return (
		<>
			<Popover 
				returnFocusOnClose={false} 
				isOpen={isOpen} 
				onClose={onPopoverClose} 
				placement="top"
				// style={{
				// 	backgroundColor: "#e84141"
				// }}
				>
				<PopoverTrigger>
					<button 
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "40px",
							width: "100%",
							border: "2px solid #A171FB",
							borderRadius: "8px",
							marginBottom: '20px',
							backgroundColor: "#6a00ff"
						}}
						onClick={() => onToggle()}
					>
						Swap
					</button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverHeader
						style={{
							display: "flex",
							justifyContent: "center",
							backgroundColor: "#e84141",
							fontSize: "20px",
						}}
					>
						<b>Swap Confirmation</b>
				</PopoverHeader>

					{isUnknownPrice ? (
						<PopoverBody>
							We can't get price for one of your tokens. <br />
							Check output amount of the selected route carefully.
							<Button colorScheme={'red'} onClick={handleSwap} mt={4}>
								Swap
							</Button>
						</PopoverBody>
					) : (
						<PopoverBody
							style={{
								display: "grid",
								justifyContent: "center",
								backgroundColor: "#b84141",
							}}
						>
							<b>Warning: High Price Impact</b>
							{/* <br /> */}
							{!isDegenModeEnabled ? (
								<>
									Type "{requiredText}" to make a swap.
									<Input
										placeholder="Type here..."
										mt={'4px'}
										onChange={(e) => setValue(e.target.value)}
										value={value}
									></Input>
								</>
							) : null}
							<button
								// colorScheme={'red'}
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "40px",
									width: "100%",
									border: "2px solid #FFFFFF",
									borderRadius: "8px",
									marginBottom: '20px',
									marginTop: '12px',
									backgroundColor: "#e84141"
								}}
								onClick={handleSwap}
								disabled={isSwapDisabled && !isDegenModeEnabled}
							>
								Swap with High-Slippage
							</button>
						</PopoverBody>
					)}
				</PopoverContent>
			</Popover>
		</>
	);
};

export default SwapConfirmation;
