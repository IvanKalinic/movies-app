import { Link } from "react-router-dom";
import "./index.scss";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="description">{post.desc}</p>
        <button className="card-button">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
