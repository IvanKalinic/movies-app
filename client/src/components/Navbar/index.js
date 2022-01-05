import { Link } from "react-router-dom";
import "./index.scss";

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
      <span/>
      <span/>
      <span/>
      { user ? <>
          <Link className="link" to="/imdbUnoficial">
            Movies
          </Link>
          <Link className="link" to="/crypto">
          Crypto
          </Link>
        </> : null
      }
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
