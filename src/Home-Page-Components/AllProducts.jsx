import { useEffect, useState } from "react"
import Products from "./Products"
import like from '../assets/Home-Page-Assests/ProductsImages/Like.png'; // like görseli
import { useNavigate } from 'react-router-dom';


const AllProducts = () => {
    const [tumUrunler, settumUrunler] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/Product")
            .then(response => response.json())
            .then(veri => settumUrunler(veri))
            .catch(error => console.error(error))
    }, []);

    const navigate = useNavigate();

    const detaySayfasınagidis = (detayIdSi) => {
        navigate(`/ProductDetail/${detayIdSi}`)
    }

    return (

        <div className="allProduct">
            <div className="productsgrid">
                {tumUrunler.map(tag => (
                    <Products key={tag.Id} like={like} photo={tag.ImageUrl} description={tag.Name} money={tag.Price} buttonclick={() => detaySayfasınagidis(tag.Id)} />
                ))}
            </div>
        </div>


    );
}
export default AllProducts;