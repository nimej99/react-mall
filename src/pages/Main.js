import Card from '../components/Card';

function Main(props){
  return(
    <>
      <div className='main-bg' style={{ backgroundImage: `url(${props.bg})` }}></div>

      <div className="container">
        <div className="row">
          {props.data.map((data, i)=>{
            return(
              <Card title={data.title} content={data.content} index={i} />
            )
          })
          }
        </div>
      </div>
    </>
  )
}

export default Main;