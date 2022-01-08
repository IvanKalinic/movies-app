import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./Card.scss";

export function ReactstrapCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details/" + props.title, { state: { title: props.title } });
  };

  return (
    <Card className="card" onClick={handleClick}>
      {!!props?.picture ? (
        <CardImg alt="No image" src={props.picture} top className="picture" />
      ) : null}
      <CardBody>
        {!!props?.title ? <CardTitle tag="h5">{props?.title}</CardTitle> : null}
        {!!props?.subtitle ? (
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props?.subtitle}
          </CardSubtitle>
        ) : null}
        {!!props?.description ? (
          <CardText>{props?.description}</CardText>
        ) : null}
      </CardBody>
    </Card>
  );
}
