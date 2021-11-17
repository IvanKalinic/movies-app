import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = ({ user }) => {
  //   const logout = () => {
  //     window.open("http://localhost:5000/auth/logout", "_self");
  //   };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          MyMovies
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="list-item">{user.displayName}</li>
          <li className="list-item">Logout</li>
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
