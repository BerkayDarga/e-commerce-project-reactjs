const DiscountProducts = (DiscountProductsProps) => {
    const like = DiscountProductsProps.like;
    const discountphoto = DiscountProductsProps.discountphoto;
    const discountdescription = DiscountProductsProps.discountdescription;
    const money = DiscountProductsProps.money;
    return (
        <div className="discountproductcard">
            <div className="topsection">
                <img src={like} alt="" />
            </div>
            <img src={discountphoto} alt="" />
            <div className="descriptionsection">
                <p>{discountdescription}</p>
                <p>{money}</p>
                <button className="blackButton">Buy Now</button>
            </div>
        </div>
    );
}
export default DiscountProducts;