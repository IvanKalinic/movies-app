import { Link } from "react-router-dom";
import "./index.scss";
import { Flex } from "@chakra-ui/react";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          MyMovies
        </Link>
      </span>
      <span />
      <span />
      <span />
      {user ? (
        <Flex>
          <Link
            className="link"
            to="/questionnaire"
            style={{ marginRight: 10 }}
          >
            Questionnaire
          </Link>
          <Link
            className="link"
            to="/imdbUnoficial"
            style={{ marginRight: 10 }}
          >
            Movies
          </Link>
          <Link className="link" to="/crypto" style={{ marginRight: 10 }}>
            Crypto
          </Link>
        </Flex>
      ) : null}
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img src={user.profilePicture} alt="" className="avatar" />
          </li>
          <li className="list-item" style={{ color: "black" }}>
            {user.username}
          </li>
          <li className="list-item" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
