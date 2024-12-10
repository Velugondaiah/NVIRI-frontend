import {Component} from "react"
import "./index.css"
import { FaSearchPlus } from "react-icons/fa";
import { BiFridge } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import { IoTvOutline } from "react-icons/io5";
import { GiGasStove } from "react-icons/gi";


class Home extends Component{
    render(){
        return(
            <div className="main-bg-container">

            
            <nav>
                <img src = "https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__" className="logo" />
              <div>
                <button className="button1" type = "button">Biz Login</button>
                <button className="button2" type="button">Login</button>
              </div>
            </nav>

            <div className="main-home-container">
                <img src  = "https://res.cloudinary.com/dbroxheos/image/upload/v1733760809/jv0axbornynh6axnu2tp.png" className="home-image" />
                 <div className="con">
                    <h1 className="home-heading">Take care of your home needs now!</h1>
                    <p className="home-para">ServicePro is your one-stop solution to troubleshoot, choose a vendor and book a technician</p>
                    <div>
                        <select id="location" className="location-dropdown">
                            <option value="pune">Pune</option>
                            <option value="ongole">Ongole</option>
                            <option value="guntur">Guntur</option>
                        </select>
                    </div>
                    <div className="search-bar-container"> 
                       <div className="search-input-container">
                           <input type="text" placeholder="Search Home Appliances" className="search-input" />
                           <FaSearchPlus className="search-icon" />
                       </div>
                       <button className="search-button" type="button">Search</button>
                    </div>
                 </div>
            </div>
             <div className="services-container">
                   <h1 className="services-heading">All Services</h1>
                   <p className="services-para">The time is now for it to be okay to be great. For being a bright color. For standing out</p>
                   <div className="ser-cont">
                    <div className="services-type-container">
                    <BiFridge className="services-icons" />
                    <h1 className="services-type">Fridge</h1>
                    <p className="services-des">We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                    </div>

                    <div className="services-type-container">
                    <TbAirConditioning className="services-icons" />
                    <h1 className="services-type">Air Conditioner</h1>
                    <p className="services-des">Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                    </div>

                    <div className="services-type-container">
                    <IoTvOutline className="services-icons" />
                    <h1 className="services-type">Television</h1>
                    <p className="services-des">What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                    </div>

                    <div className="services-type-container">
                    <GiGasStove className="services-icons" />
                    <h1 className="services-type">Gas Stove</h1>
                    <p className="services-des">We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                    </div>

                    <div className="services-type-container">
                    <TbAirConditioning className="services-icons" />
                    <h1 className="services-type">Air Conditioner</h1>
                    <p className="services-des">Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                    </div>

                    <div className="services-type-container">
                    <IoTvOutline className="services-icons" />
                    <h1 className="services-type">Television</h1>
                    <p className="services-des">What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                    </div>
                   </div>

             </div>
             <div className="booking-steps-container">
                <h1 className="booking-main-heading">Book a request in 3 simple steps</h1>
                <div className="book-cont">
                    <div className="each-booking-container">
                        <img src = "https://res.cloudinary.com/dbroxheos/image/upload/v1733765453/psdugbdmrixzfnsjl5xf.png" className ="booking-image"/>
                        <h1 className="booking-heading">Provide your appliance details</h1>
                        <p className="booking-des">Let us know your appliance details and your issue.</p>
                    </div>

                    <div className="each-booking-container">
                        <img src = "https://res.cloudinary.com/dbroxheos/image/upload/v1733765445/gqscyz7jyf48ej8lxpsi.png" className ="booking-image"/>
                        <h1 className="booking-heading">Choose your technician</h1>
                        <p className="booking-des">Choose from a wide variety of technicians and vendors.</p>
                    </div>

                    <div className="each-booking-container">
                        <img src = "https://res.cloudinary.com/dbroxheos/image/upload/v1733765436/mgubiexoyf3j2qizj52h.png" className ="booking-image"/>
                        <h1 className="booking-heading">Get it fixed!</h1>
                        <p className="booking-des">The technician will arrive at your doorstep shortly to fix it!</p>
                    </div>
                </div>
             </div>
             <div className="feature-vendors-container" >
                <h1 className="ven">Featured Vendors</h1>
                <div className="vendor-cont">
                    <div className="each-vender-card">
                        <div className="vendor-details">
                            <img src ="https://res.cloudinary.com/dbroxheos/image/upload/v1733766319/y6vcc5c31i2dooxqrkhk.png" />
                             <h1 className="vendor-name">Metro Hardware</h1>
                        </div>
                        <ul className="unorder-list">
                            <li className="verder-services">
                                <h1 className="val">22</h1>
                                <p className="val-des">Services</p>
                            </li>

                            <li className="verder-services">
                                <h1 className="val">8/10</h1>
                                <p className="val-des">Rating</p>
                            </li>

                            <li className="verder-services">
                                <h1 className="val">89</h1>
                                <p className="val-des">Reviews</p>
                            </li>

                            <li className="verder-services">
                                <a className="an" href="#">Show more</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div className="each-vender-card">
                        <div className="vendor-details">
                            <img src ="https://res.cloudinary.com/dbroxheos/image/upload/v1733766319/y6vcc5c31i2dooxqrkhk.png" />
                             <h1 className="vendor-name">Metro Hardware</h1>
                        </div>
                        <ul className="unorder-list">
                            <li className="verder-services">
                                <h1 className="val">22</h1>
                                <p className="val-des">Services</p>
                            </li>

                            <li className="verder-services">
                                <h1 className="val">8/10</h1>
                                <p className="val-des">Rating</p>
                            </li>

                            <li className="verder-services">
                                <h1 className="val">89</h1>
                                <p className="val-des">Reviews</p>
                            </li>

                            <li className="verder-services">
                                <a className="an" href="#">Show more</a>
                            </li>

                        </ul>
                        
                    </div>  
                    <div className="each-vender-card">
                        <div className="vendor-details">
                            <img src ="https://res.cloudinary.com/dbroxheos/image/upload/v1733766319/y6vcc5c31i2dooxqrkhk.png" />
                             <h1 className="vendor-name">Metro Hardware</h1>
                        </div>
                        <ul className="unorder-list">
                            <li className="verder-services">
                                <h1 className="val">22</h1>
                                <p className="val-des">Services</p>
                            </li>

                            <li className="verder-services">
                                <h1 className="val">8/10</h1>
                                <p className="val-des">Rating</p>
                            </li>

                            <li className="verder-services">
                                <h1 className="val">89</h1>
                                <p className="val-des">Reviews</p>
                            </li>

                            <li className="verder-services">
                                <a className="an" href="#">Show more</a>
                            </li>

                        </ul>
                        
                    </div>                                      
                </div>
        
             </div>
             <div className="customers-review-container">
                 <h1 className="head">See what our happy customers have to say about us</h1>
                 <div className="customerss">

                
                 <div className="customers">
                    <div className="each-customer-review">
                    <div className="vendor-details">
                            <img className="review-image" src ="https://s3-alpha-sig.figma.com/img/b8ba/1462/2ed0bf1d21fc23474f0365bacebc6532?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsfQUMz4N8nLlR-6emzSSXu779jLRKZ50nEcMTgYyVrJbl4cfVtzv9pq2HaokaogQrQJQDGPGxaEHBf0cYhIahWz9T4ByLLhdJv~njXYetzH-Cz9PGxrpwAOMwevJWEMz5HvNaOG9lkvIkvPEs9uEiHu59Rrse0LSQZpbFQTr9XwNY74T6Is0fAW2SIAczq3MEOLfCnJF21Lvlh7Ufo4yf0cwn6kUnCurh90mH3WjZJGheY3zvIQTI1QfBfi20xu~zVUWt~1QcI1gVGDU~cp-M51B9C8Ho2yEq-bFSHk7DOoeBWKF~PFImfEwRrRdcOioOPhfLUb92afhZemO7AV7Q__" />
                            <div>
                            <h1 className="vendor-name">Metro Hardware</h1>
                            <div className="aaa">
                            <p className="days">3 days ago</p>
                            <p className="review-des">Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.</p>
                            <p className="custome-revi">Couldn’t be happier.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="customers">
                    <div className="each-customer-review">
                    <div className="vendor-details">
                            <img className="review-image" src ="https://s3-alpha-sig.figma.com/img/b8ba/1462/2ed0bf1d21fc23474f0365bacebc6532?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsfQUMz4N8nLlR-6emzSSXu779jLRKZ50nEcMTgYyVrJbl4cfVtzv9pq2HaokaogQrQJQDGPGxaEHBf0cYhIahWz9T4ByLLhdJv~njXYetzH-Cz9PGxrpwAOMwevJWEMz5HvNaOG9lkvIkvPEs9uEiHu59Rrse0LSQZpbFQTr9XwNY74T6Is0fAW2SIAczq3MEOLfCnJF21Lvlh7Ufo4yf0cwn6kUnCurh90mH3WjZJGheY3zvIQTI1QfBfi20xu~zVUWt~1QcI1gVGDU~cp-M51B9C8Ho2yEq-bFSHk7DOoeBWKF~PFImfEwRrRdcOioOPhfLUb92afhZemO7AV7Q__" />
                            <div>
                            <h1 className="vendor-name">Metro Hardware</h1>
                            <div className="aaa">
                            <p className="days">3 days ago</p>
                            <p className="review-des">Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.</p>
                            <p className="custome-revi">Couldn’t be happier.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="customers">
                    <div className="each-customer-review">
                    <div className="vendor-details">
                            <img className="review-image" src ="https://s3-alpha-sig.figma.com/img/b8ba/1462/2ed0bf1d21fc23474f0365bacebc6532?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsfQUMz4N8nLlR-6emzSSXu779jLRKZ50nEcMTgYyVrJbl4cfVtzv9pq2HaokaogQrQJQDGPGxaEHBf0cYhIahWz9T4ByLLhdJv~njXYetzH-Cz9PGxrpwAOMwevJWEMz5HvNaOG9lkvIkvPEs9uEiHu59Rrse0LSQZpbFQTr9XwNY74T6Is0fAW2SIAczq3MEOLfCnJF21Lvlh7Ufo4yf0cwn6kUnCurh90mH3WjZJGheY3zvIQTI1QfBfi20xu~zVUWt~1QcI1gVGDU~cp-M51B9C8Ho2yEq-bFSHk7DOoeBWKF~PFImfEwRrRdcOioOPhfLUb92afhZemO7AV7Q__" />
                            <div>
                            <h1 className="vendor-name">Metro Hardware</h1>
                            <div className="aaa">
                            <p className="days">3 days ago</p>
                            <p className="review-des">Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.</p>
                            <p className="custome-revi">Couldn’t be happier.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                 </div> 
                 </div>                                 
             </div>
            </div>
            
        )
    }
}
export default Home