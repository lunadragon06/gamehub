import AuthContext from "../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
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
      <a className="brand" href="/">
        <img className="logo" src={logo} alt="" /> 
        <span className="wordmark">
          GameHub
        </span>
      </a>
      <input type="checkbox" id="nav" />
      <label className="hamburger" htmlFor="nav">
        <span />
        <span />
        <span />
      </label>
      <ul className="menu">
        <li>
          <NavLink to="/" onClick="onLinkClick()">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick="onLinkClick()">
            Contact
          </NavLink>
        </li>
        {auth ? (
				<>
        <li>
					<NavLink to="/admin" onClick="onLinkClick()">
            Admin
          </NavLink> 
        </li>
        <li onClick={logout} className="logbtn">
          <NavLink to="/" onClick="onLinkClick()" id="userlink">
            <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: '1.4rem', }} />
          </NavLink>
        </li>
				</>
			  ) : (
        <li className="logbtn">
				  <NavLink to="/login" onClick="onLinkClick()" id="userlink">
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.4rem', }}/>
          </NavLink>
        </li>
			  )}
      </ul>
    </nav>
  );
}

export default Nav;
