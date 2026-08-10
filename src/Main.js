import restaurantDish from "./Assets/restauranfood.jpg"
import GreekSalad from "./Assets/greek salad.jpg"
import Bruscheta from "./Assets/bruchetta.svg"
import LemonDessert from "./Assets/lemon dessert.jpg"


function Main () {
    return (
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

            {/*SPECIALS*/}

            <section className="specials">
                <div className="specials-header">
                    <h2>This week specials!</h2>
                    <button>Online Menu</button>
                </div>

                <div className= "cards">
 {/*CARD 1*/}
                <article className="card">
                    <img className="hero-image" src={GreekSalad} alt="Greek salad"/>
                <div className="card-content">
                    <div className="card-title">
                        <h3>Greek Salad</h3>
                        <span>$12.99</span>
                    </div>

                <p>
                The famous greek salad of crispy lettuce,
                peppers, olives and our Chicago style feta cheese,
                garnished with crunchy garlic and rosemary croutons.
                </p>

                <p>Order a delivery 🚲</p>
                </div>
                </article>

 {/*CARD 2*/}
                <article className="card">
                    <img src={Bruscheta} alt="Bruschetta"/>
                <div className="card-content">
                    <div className="card-title">
                        <h3>Bruschetta</h3>
                        <span>$5.99</span>
                    </div>

                <p>
                Our Bruschetta is made from grilled bread
                that has been smeared with garlic and seasoned
                with salt and olive oil.</p>

                <p>Order a delivery 🚲</p>
                </div>
                </article>

 {/*CARD 3*/}
                <article className="card">
                    <img src={LemonDessert} alt="Lemon dessert"/>
                <div className="card-content">
                    <div className="card-title">
                        <h3>Lemon Dessert</h3>
                        <span>$5.00</span>
                    </div>

                <p>
                This comes straight from grandma's recipe book,
                every last ingredient has been sourced and is
                as authentic as can be imagined.</p>

                <p>Order a delivery 🚲</p>
                </div>
                </article>
 
                </div>
            </section>
            <h1>hi little lemon</h1>
        </main>
            );
}

export default Main;