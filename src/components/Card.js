import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="col-md-4" key={props.index}>
      {/* <img src={`${process.env.PUBLIC_URL} /logo192.png`} alt="logo" /> */}
      <Link to={`/detail/${props.index}`}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`}
          alt="img" width='70%' />
      </Link>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

export default Card;