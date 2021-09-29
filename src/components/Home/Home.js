import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <body>
            <section id="home" style={{ background: "url('/img/home-back.jpg')" }}>
                <div id="home-cover">
                    <div id="home-container">
                        <img src="./img/logo.png" alt='' />
                        <h1>Delicious Food</h1>
                        <h3>
                            Food Quest has received numerous awards including: best lunch from the readers of eye magazine; best food from now magazine's critic's pick; best late night munchies from dineto, and has been recommended in toronto life's restaurant guide for best food.
                        </h3>
                        <a href="http://sr-tamim.github.io/portfolio-v2">Order Now</a>
                    </div>
                </div>
            </section>
            <section id="booking" style={{ background: "url('/img/booking-back.jpg')" }}>
                <div id="booking-container">
                    <h3>Reservation</h3>
                    <h1>Book A Table Now !</h1>
                    <a href="http://sr-tamim.github.io/portfolio-v2">Book Now</a>
                </div>
            </section>
            <section id="awards">
                <img src="./img/award1.png" alt='' />
                <img src="./img/award2.png" alt='' />
                <img src="./img/award3.png" alt='' />
                <img src="./img/award4.png" alt='' />
            </section>
            <section>
                <div id="our-slogan" className="flex-container">
                    <div className="flex-left">
                        <h1>
                            <span className="change-color">Tried</span> The Rest? <br />
                            Now Try The <span className="change-color">Best</span>
                        </h1>
                        <h3>
                            Your search for delicious food ends here. We pride ourselves on making real food from the best ingredients.
                        </h3>
                        <a href="http://sr-tamim.github.io/portfolio-v2">Order Online Here</a>
                    </div>
                    <div className="flex-right img-container">
                        <img src="./img/about-us-image.png" alt='' />
                    </div>
                </div>
            </section>
            <section>
                <div id="about-us" className="flex-container">
                    <div className="flex-left img-container">
                        <img src="./img/live-healthy.png" alt='' />
                    </div>
                    <div className="flex-right">
                        <h3>Our Story</h3>
                        <h2>
                            Welcome To <br />
                            <span className="change-color">Food Quest</span>
                        </h2>
                        <p>
                            In 2003, Food Quest opened its first location in Dhaka, Bangladesh. Focussed entirely on serving the perfect food, the tiny take-out restaurant located in the city's busy District created a sensation in the area, winning praise from food critics and numerous people's choice awards.
                        </p>
                        <a href="http://sr-tamim.github.io/portfolio-v2">Contact Us</a>
                    </div>
                </div>
            </section>
            <section id="dishes">
                <div id="dishes-header">
                    <h4>Hot Sales</h4>
                    <h2>Popular Dishes</h2>
                    <h3>We make everything by hand with the best possible ingredients</h3>
                </div>
                <div id="dishes-cards">
                    <div className="item-container">
                        <div className="item-card">
                            <img src="./img/pizza.jpg" alt='' />
                            <h4>Pizza</h4>
                            <p>
                                Just order and enjoy our foods with great services.Your satisfaction is our accomplishment.
                            </p>
                            <a href="http://sr-tamim.github.io/portfolio-v2">Order Now</a>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item-card">
                            <img src="./img/burger.jpg" alt='' />
                            <h4>Burger</h4>
                            <p>
                                Just order and enjoy our foods with great services.Your satisfaction is our accomplishment.
                            </p>
                            <a href="http://sr-tamim.github.io/portfolio-v2">Order Now</a>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item-card">
                            <img src="./img/sushi.jpg" alt='' />
                            <h4>Sushi</h4>
                            <p>
                                Just order and enjoy our foods with great services.Your satisfaction is our accomplishment.
                            </p>
                            <a href="http://sr-tamim.github.io/portfolio-v2">Order Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div id="footer-head">
                    <img src="./img/footer-logo.png" alt='' />
                    <h1>
                        <span id="color1">Food</span> <span id="color2">Quest</span>
                    </h1>
                </div>
                <h3>Good food choices are good investments</h3>
                <div id="copyright">
                    © All Rights Reserved by Food Quest
                </div>
            </footer>
        </body>
    );
};

export default Home;