import Cards from "../Cards/Cards"
import "./Property.css"

function Property(props) {
    
    return (
       <div>
         <div className="headpropetry">
        <h4>| Properties</h4>
        <h1>We Provide The Best Property You Like</h1>
    </div>
        <section className="Propertycards">
            <Cards img="/Task2/images/property-01.jpg " category="Luxury Villa" price=" $2.264.000" title="18 New Street Miami, OR 97219" descr="Bedrooms: 8 Bathrooms: 8 Area: 545m2 Floor: 3 Parking: 6 spots" visit="Schedule a visit" />
            <Cards img="/Task2/images/property-02.jpg" category="Luxury Villa" price="$1.180.000" title="54 Mid Street Florida, OR 27001" descr="Bedrooms: 6 Bathrooms: 5 Area: 450m2 Floor: 3 Parking: 8 spots" visit="Schedule a visit" />
            <Cards img="/Task2/images/property-03.jpg" category="Luxury Villa" price="$1.460.000" title="26 Old Street Miami, OR 38540" descr="Bedrooms: 5 Bathrooms: 4 Area: 225m2 Floor: 3 Parking: 10 spots" visit="Schedule a visit" />
            <Cards img="/Task2/images/property-04.jpg" category="Apartment" price="$584.500" title="12 New Street Miami, OR 12650" descr="Bedrooms: 4 Bathrooms: 3 Area: 125m2 Floor: 25th Parking: 2 cars" visit="Schedule a visit" />
            <Cards img="/Task2/images/property-05.jpg" category="Penthouse" price="$925.600" title="34 Beach Street Miami, OR 42680" descr="Bedrooms: 4 Bathrooms: 4 Area: 180m2 Floor: 38th Parking: 2 cars" visit="Schedule a visit" />
            <Cards img="/Task2/images/property-06.jpg" category="Modern Condo" price="$450.000" title="22 New Street Portland, OR 16540" descr="Bedrooms: 3 Bathrooms: 2 Area: 165m2 Floor: 26th Parking: 3 cars" visit="Schedule a visit" />
        </section>
       </div>
    )
}

export default Property