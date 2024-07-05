import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate = useNavigate();

    const detailButtons = () => {
        navigate('/ProductsPage')
    }
    const detailButton2 = () => {
        navigate('/')
    }
    return (
        <div>
            <button onClick={detailButtons}>products page ye gider</button>
            <button onClick={detailButton2}>home a gider</button>
        </div>
    );
}
export default ProductDetail;