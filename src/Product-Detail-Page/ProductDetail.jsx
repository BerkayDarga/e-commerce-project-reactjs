import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

const ProductDetail = () => {

    const { idDetail } = useParams();
    const [productsDetail, setProductsDetail] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/Product?Id=${idDetail}`)  //id nin Id olduğunu burda tanıtıyoruz
            .then(response => response.json())
            .then(data => setProductsDetail(data))
            .catch(error => console.log(error))
    }, []);



    return (

        productsDetail.map(detail => (
            <div className="productDetail">
                <p>"ürün adı:"{detail.Name}</p>
                <img src={detail.ImageUrl} />
                <p>"kategori adı: "{detail.Category.Name}</p>
                <p>"ürünün fiyatı:"{detail.Price}</p>
            </div>

        ))


    )

}

export default ProductDetail;