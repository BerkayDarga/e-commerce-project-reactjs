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
                <div className="productDetailLeft">
                    <img src={detail.ImageUrl} />
                </div>
                <div className="productDetailRight">
                    <h1>{detail.Name}</h1>
                    <h3>{detail.Price}</h3>
                    <button>Sepete Ekle</button>
                </div>

            </div>

        )));

}

export default ProductDetail;