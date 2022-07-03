import ShoesCard from "../../ShoesCard/ShoesCard";
import "./Home.css";
import Youtube from "./Youtube/Youtube";
import ShoesCardsList from "../../../Components/ShoesCardsList"
import RandomBrand from "../../RandomBrand/RandomBrand";

function isTheFirstDayOfTheMonth(){
    const time = new Date()
    const day = time.getDate()
    return day === 1
}


function Home(): JSX.Element {
   const allShoesCards = ShoesCardsList.map(item => {
    return <ShoesCard brand={item.brand} size={item.size} price={item.price} image={item.image}/>
   })
    return (
        <div className="Home">
              {isTheFirstDayOfTheMonth() && <p>💰💰💰Today is a Sell DAY 💰💰💰</p>}
			<Youtube />
            <div className="Shoes-Container">
                {allShoesCards}
            </div>
            <div className="randomBrand">
                <RandomBrand />
            </div>
            
        </div>
    );
}

export default Home;



  
