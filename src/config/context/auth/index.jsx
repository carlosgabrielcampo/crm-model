import { createContext, useState } from "react";
const Context = createContext();

export default function AuthProvider({ children }) {
	const [alertState, setAlertstate] = useState({show: false});
	return (
		<Context.Provider value={{alertState, setAlertstate}}>
			{ children }
		</Context.Provider>
	);
}