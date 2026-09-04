import Hero from "./Hero";
import Cards from "./SpcialCards";

function Homepage() {
  return (
    <main className="centerH1">
      <h1>Little</h1> 
      <h1 style={{color: "#f4ce14", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  }}> Lemon</h1>
      <p>Welcome to Little Lemon!</p>
      
      <Hero />
      <Cards />
    </main>
  );
}

export default Homepage;