import { PropsWithChildren, createContext, useState } from 'react';
type contextType = {
	isVisible: boolean;
	setVisibility: (prev: any) => void;
};
export const context = createContext<contextType>({
	isVisible: false,
	setVisibility: () => {},
});
const ContextProvider = (props: PropsWithChildren) => {
	const [isVisible, setIsVisible] = useState(false);

	const defaultState: contextType = {
		isVisible: isVisible,
		setVisibility: setIsVisible,
	};
	return (
		<context.Provider value={defaultState}>{props.children}</context.Provider>
	);
};
export default ContextProvider;
