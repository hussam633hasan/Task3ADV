import { useEffect, useState } from "react"
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import "./Pproperties.css"


function Pproperties() {
  const [items] = useState([
    {
      id: 0,
      img: "/Task2/images/property-01.jpg ",
      type: "Luxury Villa",
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
      Bedrooms: "Bedrooms: 8",
      Bathrooms: "Bathrooms: 8",
      Area: "Area: 545m2",
      Floor: "Floor: 3",
      Parking: "Parking: 6 spots",
      visit: "Schedule a visit",
    },
    {
      id: 1,
      img: "/Task2/images/property-02.jpg ",
      type: "Luxury Villa",
      price: "$1.180.000",
      title: "54 New Street Florida, OR 27001",
      Bedrooms: "Bedrooms: 6",
      Bathrooms: "Bathrooms: 5",
      Area: "Area: 450m2",
      Floor: "Floor: 3",
      Parking: "Parking: 8 spots",
      visit: "Schedule a visit",
    },
    {
      id: 2,
      img: "/Task2/images/property-03.jpg ",
      type: "Luxury Villa",
      price: "$1.460.000",
      title: "26 Mid Street Portland, OR 38540",
      Bedrooms: "Bedrooms: 5",
      Bathrooms: "Bathrooms: 4",
      Area: "Area: 225m2",
      Floor: "Floor: 3",
      Parking: "Parking: 10 spots",
      visit: "Schedule a visit",
    },
    {
      id: 3,
      img: "/Task2/images/property-04.jpg ",
      type: "Apartment",
      price: "$584.500",
      title: "12 Hope Street Portland, OR 12650",
      Bedrooms: "Bedrooms: 4",
      Bathrooms: "Bathrooms: 3",
      Area: "Area: 125m2",
      Floor: "Floor: 25th",
      Parking: "2 cars",
      visit: "Schedule a visit",
    },
    {
      id: 4,
      img: "/Task2/images/property-05.jpg ",
      type: "Apartment",
      price: "$925.600",
      title: "34 Hope Street Portland, OR 42680",
      Bedrooms: "Bedrooms: 4",
      Bathrooms: "Bathrooms: 4",
      Area: "Area: 180m2",
      Floor: "Floor: 38th",
      Parking: "2 cars",
      visit: "Schedule a visit",
    },
    {
      id: 5,
      img: "/Task2/images/property-06.jpg ",
      type: "Apartment",
      price: "$450.000",
      title: "22 Hope Street Portland, OR 16540",
      Bedrooms: "Bedrooms: 3",
      Bathrooms: "Bathrooms: 2",
      Area: "Area: 165m2",
      Floor: "Floor: 26th",
      Parking: "Parking: 3 cars",
      visit: "Schedule a visit",
    },
    {
      id: 6,
      img: "/Task2/images/property-03.jpg ",
      type: "Penthouse",
      price: "$925.600",
      title: "34 Hope Street Portland, OR 42680",
      Bedrooms: "Bedrooms: 4",
      Bathrooms: "Bathrooms: 4",
      Area: "Area: 180m2",
      Floor: "Floor: 38th",
      Parking: "Parking: 2 cars",
      visit: "Schedule a visit",
    },
    {
      id: 7,
      img: "/Task2/images/property-02.jpg ",
      type: "Penthouse",
      price: "$1.520.000",
      title: "26 Old Street Miami, OR 12870",
      Bedrooms: "Bedrooms: 12",
      Bathrooms: "Bathrooms: 15",
      Area: "Area: 380m2",
      Floor: "Floor: 3",
      Parking: "Parking: 14 spots",
      visit: "Schedule a visit",
    },
    {
      id: 8,
      img: "/Task2/images/property-01.jpg ",
      type: "Penthouse",
      price: "$3.145.000",
      title: "34 New Street Miami, OR 24650",
      Bedrooms: "Bedrooms: 10",
      Bathrooms: "Bathrooms: 12",
      Area: "Area: 860m2",
      Floor: "Floor: 3",
      Parking: "Parking: 10 spots",
      visit: "Schedule a visit",
    },

  ])

  const [Card, setCard] = useState(items);
  const [activeBtn, setActiveBtn] = useState('show all')
  const handleBtns = (e) => {
    setActiveBtn(e)
    if (e === "show all") {
      setCard(items);
    } else if (e === "Penthouse") {
      const filtered = items.filter((item) => item.type === "Penthouse");
      setCard(filtered);
    } else if (e === "Apartment") {
      const filtered = items.filter((item) => item.type === "Apartment");
      setCard(filtered);
    } else if (e === "Luxury Villa") {
      const filtered = items.filter((item) => item.type === "Luxury Villa");
      setCard(filtered);
    }
  };

  return (
    <div className="Pproperties">
      <div className="header-pages-content">
        <button>Home / Properties</button>
        <h1>Properties</h1>
      </div>
      <HeaderPages />
      <div className="contaner-filter-btn">
        <button className={activeBtn === 'show all' ? ' filter-btn-active' : 'filter-btn'}
          onClick={() => handleBtns('show all')}> Show all</button>

        <button className={activeBtn === 'Apartment' ? ' filter-btn-active' : 'filter-btn'}
          onClick={() => handleBtns('Apartment')}>Apartment</button>

        <button className={activeBtn === 'Luxury Villa' ? ' filter-btn-active' : 'filter-btn'}
          onClick={() => handleBtns('Luxury Villa')}> Luxury Villa</button>

        <button className={activeBtn === 'Penthouse' ? ' filter-btn-active' : 'filter-btn'}
          onClick={() => handleBtns('Penthouse')} >Penthouse</button>
      </div>
      <div className="cards-contener">
        {Card.map((item) => {
          return (
            <div key={items.id} >
              <div className="Propertycard">
                <div className="imgcard">
                  <img src={item.img} />
                </div>
                <div className="pricecard">
                  <h4>{item.type}</h4>
                  <h1>{item.price}</h1>
                </div>
                <div className="titlecard">
                  <h1>{item.title}</h1>
                </div>
                <div className="disc-m">
                  <div className="d-flex">
                    <p>{item.Bedrooms}</p>
                    <p>{item.Bathrooms}</p>
                  </div>
                  <div className="d-flex">
                    <p>{item.Area}</p>
                    <p>{item.Floor}</p>
                    <p>{item.Parking}</p>
                  </div>
                </div>
                <div className="btncard">
                  <button>{item.visit}</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div class="pagination">
        <ul>
          <li>1</li>
          <li className="li-active">2</li>
          <li>3</li>
          <li>&gt;&gt;</li>
        </ul>
      </div>
    </div>
  )
}

export default Pproperties