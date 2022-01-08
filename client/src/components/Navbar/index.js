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
        <Link className="link" to={user ? "/popular" : "/"}>
          MyMovies
        </Link>
      </span>
      {user ? (
        <Flex mb="2" ml="10">
          <Link
            className="link"
            to="/imdbUnoficial"
            style={{ marginRight: 10 }}
          >
            Movies
          </Link>
          <Link className="link" to="/popular" style={{ marginRight: 10 }}>
            Trending
          </Link>
        </Flex>
      ) : null}
      {user ? (
        <ul className="list" style={{ marginBottom: "6px" }}>
          <li className="list-item">
            <img src={user.profilePicture} alt="" className="avatar" />
          </li>
          <li
            className="list-item"
            style={{ color: "black", marginLeft: "-10px" }}
          >
            {user.username}
          </li>
          <li className="list-item logout" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login" style={{ marginBottom: "8px" }}>
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
