import ShoesCard from "../../ShoesCard/ShoesCard";
import "./Home.css";
import Youtube from "./Youtube/Youtube";
import ShoesCardsList from "../../../Components/ShoesCardsList"

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
            
        </div>
    );
}

export default Home;


//Q: 1. why not putting the iframe inside the home instead of building special component for Youtube
     //2. how come home css recognize iframe of youtube while it doesn't have directly iframe inside home component 
     // Do i have to use interface all the time even when i have one prop to convey
     // i put the paragraph that show a message if its the 1 of the month in the youtube component, is that good or should i put it inside home?