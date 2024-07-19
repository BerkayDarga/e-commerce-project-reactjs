const Category = (CategoryProps) => {
    const ikon = CategoryProps.ikon;
    const description = CategoryProps.description;
    const handleClick=CategoryProps.handleClick;
    return (
        <button className="categoryprops" onClick={handleClick}>
            <img src={ikon} alt="" />
            <h5>{description}</h5>
        </button>

    );
}
export default Category;