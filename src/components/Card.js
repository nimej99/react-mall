function Card(props){
  return(
    <div className="col-md-4" key={props.index}>
      {/* <img src={`${process.env.PUBLIC_URL} /logo192.png`} alt="logo" /> */}
      <img src={`https://codingapple1.github.io/shop/shoes${props.index+1}.jpg`}
      alt="" width='70%' />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

export default Card;