import "./Home.css";
import Youtube from "./Youtube/Youtube";

function Home(): JSX.Element {
   
    return (
        <div className="Home">
			<Youtube />
        </div>
    );
}

export default Home;


//Q: 1. why not putting the iframe inside the home instead of building special component for Youtube
     //2. how come home css recognize iframe of youtube while it doesn't have directly iframe inside home component 
     // Do i have to use interface all the time even when i have one prop to convey