import { useNavigate} from 'react-router-dom';

const Products = (ProductCardProps) => {
    const like = ProductCardProps.like;
    const photo = ProductCardProps.photo;
    const description = ProductCardProps.description;
    const money = ProductCardProps.money;

    const navigation = useNavigate();
    const buttonclick = () => {
        navigation('/ProductsPage');
    } 
    return (
        <div className="productcard">
            <div className="topsection">
                <img src={like} alt="" />
            </div>
            <img src={photo} alt="" />
            <div className="textIcon">
                <p>{description}</p>
                <div className="price">
                    <p>{money}</p>
                </div>
                <button onClick={buttonclick} className="blackButton">Buy Now</button>
            </div>
        </div>
    );
}
export default Products;