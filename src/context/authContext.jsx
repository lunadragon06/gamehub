import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const authContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
	const [auth, setAuth] = useLocalStorage("auth", null);
	return <authContext.Provider value={[auth, setAuth]}>{props.children}</authContext.Provider>;
};

export default authContext;
