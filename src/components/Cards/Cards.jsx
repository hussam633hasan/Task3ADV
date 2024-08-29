import "./Cards.css"

function Cards(props) {
  return (
    <div className="Propertycard">
            <div className="imgcard">
                <img src={props.img}/>
            </div>
            <div className="pricecard">
                <h4>{props.category}</h4>
                <h1>{props.price}</h1>
            </div>
            <div className="titlecard">
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
            </div>
            <div className="btncard">
                <button>{props.visit}</button>
            </div>
        </div>
  )
}

export default Cards