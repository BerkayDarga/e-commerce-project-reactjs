import Products from "./Products"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import like from '../assets/Home-Page-Assests/ProductsImages/Like.png'

const ProductsPage = () => {

    const { id } = useParams();  //(useparams önceki sayfadan gelen parametreyi kullanıyor)home2 deki oluşturulan id yi bu sayfaya çektik
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3000/Product?Category.Id=${id}`)
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);


    const navigation = useNavigate();


    const detailPage = (detailId) => {
        navigation(`/ProductDetail/${ detailId }`)
    }

    return (
        <div>
            <div className="productsgrid">
                {categories.map(tag => (
                    <Products key={tag.Id} like={like} photo={tag.ImageUrl} description={tag.Name} money={tag.Price} buttonclick={() => detailPage(tag.Id)} />
                ))}
            </div>
        </div>
    );
}
export default ProductsPage;