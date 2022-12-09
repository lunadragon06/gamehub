import axios from "axios";
import AuthContext from "../../context/authContext";
import { BASE_URL, TOKEN_PATH } from "../../constants/data";
import FormError from "../../common/FormError";
import Heading from '../layout/typography/Heading';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema),
    });

	// eslint-disable-next-line
	const [auth, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			history("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <FormError>{loginError}</FormError>}
				<Heading content="Login" />
				<fieldset className="form-container" disabled={submitting}>
					<div>
					    <label>Username or Email</label>
						<input name="username" placeholder="Username" {...register("username")} />
						{errors.username && <FormError>{errors.username.message}</FormError>}
					</div>
					<div>
					    <label>Password</label>
						<input name="password" placeholder="Password" {...register("password")} type="password" />
						{errors.password && <FormError>{errors.password.message}</FormError>}
					</div>
					<div className="button-wrapper">
					<button className="register">{submitting ? "Loggin in ..." : "Login"}</button>
					</div>
				</fieldset>
			</form>
		</>
	);
}
