import restaurantDish from "../Assets/restauranfood.jpg";
function Hero (){
    return(
        <main>
        {/*HERO*/}
                    <section className="hero">
                        <div className="hero-content">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>We are a family owned Meditarranean restaurant, focused
                                on traditional recipies served with modern twist.
                            </p>
                            <button>Reserve a Table</button>
                        </div>
                        
                        <div className="hero-image">
                           <img src={restaurantDish} alt="Little Lemon Restaurant dish"/> 
                           
                        </div>
                    </section>
        </main>
    )
}

export default Hero;