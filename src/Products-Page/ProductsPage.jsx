import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    
        const navigation = useNavigate();

        const productsPageButtons = () => {
            navigation('/ProductDetail');
        }

        const productsPageButtons2 = () => {
            navigation('/');
        }
    
    return (
        <div>
            <button onClick={productsPageButtons}>detaya gider</button>
            <button onClick={productsPageButtons2}>home a gider</button>
        </div>
    );
}
export default ProductsPage;