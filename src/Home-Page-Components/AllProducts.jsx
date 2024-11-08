import { useEffect, useState } from "react"
import Products from "./Products"
import like from '../assets/Home-Page-Assests/ProductsImages/Like.png'; // like görseli

const AllProducts = () => {
    const [tumUrunler, settumUrunler] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/Product")
            .then(response => response.json())
            .then(veri => settumUrunler(veri))
            .catch(error => console.error(error))
    }, []);

    return(

        <div className="allProduct">
        <div className="productsgrid">
            {tumUrunler.map(tag => (
                <Products key={tag.Id} like={like} photo={tag.ImageUrl} description={tag.Name} money={tag.Price}/>
            ))}
        </div>
    </div>

     
    );
}
export default AllProducts;