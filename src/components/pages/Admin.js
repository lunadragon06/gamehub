import AuthContext from "../../context/authContext";
import Heading from "../layout/Heading";
import { useContext } from 'react';

export default function AdminPage() {

const [auth] = useContext(AuthContext);
    if(!auth || auth === null) {
        window.location.href = "/login";
    }

	return (
		<>
			<Heading content="Admin" />
			<section className="dashboard">
				Welcome back!
			</section>
		</>
	);
}
