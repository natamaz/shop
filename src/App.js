import Header from "./componets/header/Header";
import Promo from "./componets/promo/Promo";
import Brands from "./componets/brands/Brands";
import Arrivals from "./componets/arrivals/Arrivals";


function App() {
  return (
    <div className="App">
       <Header />
       <Promo />
        <Brands/>
        <Arrivals/>

    </div>
  );
}

export default App;
