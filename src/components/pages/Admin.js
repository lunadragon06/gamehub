import AuthContext from "../../context/authContext";
import Heading from "../layout/Heading";
import { useContext } from 'react';

export default function AdminPage() {

const [auth] = useContext(AuthContext);
    // prevent unlogged user to get access to admin page
    if(!auth || auth === null) {
		// useHistory or useNavigate didn't work, which is why I used this method
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
