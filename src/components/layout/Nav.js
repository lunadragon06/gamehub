import AuthContext from "../../context/authContext";
import {  NavLink, useNavigate  } from "react-router-dom";
import { useContext } from "react";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

	const history = useNavigate();

	function logout() {
		setAuth(null);
		history("/");
	}

  const onLinkClick = () => {
    document.querySelector("#nav").checked = false; 
  };
  
  document
    .querySelectorAll("a")
    .forEach((element) => element.addEventListener("click", onLinkClick));

	return (
    <nav>
      <a className="brand" href="/">GameHub</a>
        <input type="checkbox" id="nav" />
        <label className="hamburger" htmlFor="nav">
          <span />
          <span />
          <span />
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/" onClick="onLinkClick()">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick="onLinkClick()">Contact</NavLink>
          </li>
          {auth ? (
				  <>
          <li>
					  <NavLink to="/admin" onClick="onLinkClick()">Admin</NavLink> 
          </li>
          <li onClick={logout} className="logbtn">
            <NavLink to="/" onClick="onLinkClick()">
              Logout
            </NavLink>
          </li>
				  </>
			    ) : (
          <li className="logbtn">
				    <NavLink to="/login" onClick="onLinkClick()">
              Login
            </NavLink>
          </li>
			    )}
        </ul>
    </nav>
  );
}

export default Nav;
