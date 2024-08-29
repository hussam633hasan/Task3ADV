import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Deal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";


function Deal() {
    const [items] = useState([
        {
            id: 0,
            type: "penthouse",
            img: "/Task2/images/deal-03.jpg",
            desc1:"Extra Info About Penthouse",
            desc2:"Lorem ipsum dolor sit lorem nemo aspernatur odit magnam doloribus cupiditate, fuga necessitatibus voluptatibus eum numquam, obcaecati recusandae?",
            desc3:"Lorem ipsum dolor sit amet consectetuerspicia necessitatibus, sed, facere quaerat vitae cum sunt omnis beatae temporibus fugiat iusto aspernatur explicabo obcaecati?",
            flatSpace: "185 m2",
            floorNumber: "26th",
            rooms: "2",
            availability: "yes",
            paymentProcess: "Bank",
            
        },
        {
            id: 1,
            type: "apartment",
            img: "/Task2/images/deal-01.jpg",
            desc1:"Extra Info About Property",
            desc2:"Lorem ipsum dolor sit lorem nemo aspernatur odit magnam doloribus cupiditate, fuga necessitatibus voluptatibus eum numquam, obcaecati recusandae?",
            desc3:"Lorem ipsum dolor sit amet consectetuerspicia necessitatibus, sed, facere quaerat vitae cum sunt omnis beatae temporibus fugiat iusto aspernatur explicabo obcaecati?",
            flatSpace: "155 m2",
            floorNumber: "26th",
            rooms: "4",
            availability: "yes",
            paymentProcess: "Credit Card",
        },
        {
            id: 2,
            type: "villa House",
            img: "/Task2/images/deal-02.jpg",
            desc1:"Extra Info About villa",
            desc2:"Lorem ipsum dolor sit lorem nemo aspernatur odit magnam doloribus cupiditate, fuga necessitatibus voluptatibus eum numquam, obcaecati recusandae?",
            desc3:"Lorem ipsum dolor sit amet consectetuerspicia necessitatibus, sed, facere quaerat vitae cum sunt omnis beatae temporibus fugiat iusto aspernatur explicabo obcaecati?",
            flatSpace: "385 m2",
            floorNumber: "26th",
            rooms: "8",
            availability: "no",
            paymentProcess: "Personal",
        },
    
    ]);
    const [category, setCategory] = useState(items);
    const [activeBtn, setActiveBtn] = useState('apartment')
    const handleBtns = (e) => {
        setActiveBtn(e)
        if (e === "penthouse") {
            const filtered = items.filter((item) => item.type === "penthouse");
            setCategory(filtered);
        } else if (e === "apartment") {
            const filtered = items.filter((item) => item.type === "apartment");
            setCategory(filtered);
        } else if (e === "villa House") {
            const filtered = items.filter((item) => item.type === "villa House");
            setCategory(filtered);
        }
    };
 
    useEffect(() => {
        const filtered = items.filter((item) => item.type === "apartment");
        setCategory(filtered);
    }, [])
    
    return (
        <section>
            <div className="headDeal">
                <div className="headDealtxt">
                    <h4>| Best Deal</h4>
                    <h1>Find Your Best Deal Right Now!</h1>
                </div>
                <div className="headDealbtn">
                    <button className={activeBtn === 'apartment'? ' headDealbtn-active': 'headDealbtn'} 
                    onClick={() => handleBtns('apartment')} >Appartment</button>
                    <button className={activeBtn === 'villa House'? 'headDealbtn-active'  : 'headDealbtn'} 
                    onClick={() => handleBtns('villa House')}>Villa House</button>
                    <button className={activeBtn === 'penthouse'? ' headDealbtn-active': 'headDealbtn'} 
                    onClick={() => handleBtns('penthouse')}>Penthouse</button>
                </div>
            </div>
            <div>
                {category.map((item) => {
                    return (
                        <div key={items.id} className="contentDeal">
                            <div className="Dealtablet">
                                <div className="Deal-hh">
                                    <p>Total Flat Space</p>
                                    <h1>{item.flatSpace}</h1>
                                </div>
                                <div className="Deal-hh">
                                    <p>Floor number</p>
                                    <h1>{item.floorNumber}</h1>
                                </div>
                                <div className="Deal-hh">
                                    <p>Number of rooms</p>
                                    <h1>{item.rooms}</h1>
                                </div>
                                <div className="Deal-hh">
                                    <p>Parking Available</p>
                                    <h1>{item.availability}</h1>
                                </div>
                                <div className="Deal-hh">
                                    <p>Payment Process</p>
                                    <h1>{item.paymentProcess}</h1>
                                </div>
                            </div>
                            <div className="Dealimg">
                                <img src={item.img} />
                            </div>

                            <div className="Dealtxt">
                                <h4>{item.desc1}</h4>
                                <p>{item.desc2}</p>
                                <p>{item.desc3}</p>
                                <a className="HHDeal"><FontAwesomeIcon className="calendericon" icon={faCalendar} style={{ color: "#ffffff", marginRight: 15, marginLeft: -1, marginTop: 0, marginBottom: -15, backgroundColor: "#f35525", height: 25, width: 37 }} />Schedule a visit</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
       
    )
}

export default Deal