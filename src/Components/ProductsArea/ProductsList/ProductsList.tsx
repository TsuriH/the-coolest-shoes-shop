import "./ProductsList.css";
import shoesData from "../../ShoesCardsList"
function ProductsList(): JSX.Element {
    const shoesImages = shoesData.map((item) => <img src={item.image}/>)
    
    return (
        <div className="ProductsList">
        {shoesImages}
        </div>
    );
}

export default ProductsList;
