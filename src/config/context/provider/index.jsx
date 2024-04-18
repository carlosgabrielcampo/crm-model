import { createContext } from "react";
const Context = createContext();

export default function CRMProvider({ children }) {
	const user = JSON.parse(localStorage.getItem('user'));
	return (
		<Context.Provider value={{ user }}>
			{ children }
		</Context.Provider>
	);
}