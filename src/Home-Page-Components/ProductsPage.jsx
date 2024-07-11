import Products from "./Products"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import like from '../assets/Home-Page-Assests/ProductsImages/Like.png'

const ProductsPage = () => {

    const { id } = useParams();
    const [categories, setCategories] = useState([])



    useEffect(() => {
        fetch(`http://localhost:3000/Product?Category.Id=${id}`)
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);
    
        const navigation = useNavigate();

        const productsPageButtons = () => {
            navigation('/ProductDetail');
        }

        const productsPageButtons2 = () => {
            navigation('/');
        }
    
    return (
        <div>
                 <div className="productsgrid">
            {categories.map(tag => (
                        <Products key={tag.Id} like={like} photo={tag.ImageUrl} description={tag.Name} money={tag.Price} />
                    ))}
                   </div>
        </div>
    );
}
export default ProductsPage;