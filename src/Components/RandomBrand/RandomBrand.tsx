import { useState } from "react";
import "./RandomBrand.css";

function RandomBrand(): JSX.Element {
    
    const [brandName, setBrandName] = useState<string>()

    const brandArray = ['Nike','Adidas', 'Puma', 'New Balance',
    'Timberland']

    function randomBrand(): void {
        const randomNum = Math.floor(Math.random() * brandArray.length)
        setBrandName(brandArray[randomNum])
    }


    return (
        <div className="RandomBrand">
			<button onClick={randomBrand}>Random Brand Name</button>
            <span>{brandName}</span>
        </div>
    );
}

export default RandomBrand;
