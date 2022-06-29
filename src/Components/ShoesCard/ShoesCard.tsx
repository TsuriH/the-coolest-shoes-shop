import "./ShoesCard.css";

interface BrandDetails {
    brand: string;
    size: string;
    price: string;
    image: string
}


function ShoesCard(props: BrandDetails): JSX.Element {


    return (
        <div className="ShoesCard">
			<p>Brand Name: {props.brand}</p>
            <p>Size: {props.size}</p>
            <p>Price: {props.price}</p>
            <div className="Image-Container">
                <img src={props.image}/>
            </div>
            
        </div>
    );
}

export default ShoesCard;
